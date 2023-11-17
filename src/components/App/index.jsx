import { useContext, useEffect, useState } from 'react';
import {
    Link,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import { open } from '../../utils/indexdb';
import { stateContext } from '../../providers/context/defaultContext';
import { getTheme } from '../../providers/themes/getTheme';
import { ThemeProvider } from 'styled-components';
import { IntlAppProvider } from '../../providers/i18n';

import Home from '../Home';
import About, { AboutContent } from '../About';
import Stats from '../Stats';
import Layout from '../Layout';
import Spinner from '../Spinner';
import Settings from '../Settings';

import { GlobalStyle } from '../Home/style';
import { FlexWrapper, Wrapper } from './style';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<Layout />}
            errorElement={
                <div>
                    <Link to={`/`}>Something went wrong. Go back home</Link>
                </div>
            }
        >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />}>
                <Route index element={<AboutContent />} />
                <Route path="/about/:id" element={<AboutContent />} />
            </Route>
            <Route path="/stats" element={<Stats />} />
            <Route path="/settings" element={<Settings />} />
        </Route>
    )
);
const App = () => {
    const [loading, setLoading] = useState(true);
    const {
        state: { theme },
    } = useContext(stateContext);

    useEffect(() => {
        open().then(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <FlexWrapper>
                <Spinner />
            </FlexWrapper>
        );
    }

    return (
        <ThemeProvider theme={getTheme(theme)}>
            <Wrapper>
                <GlobalStyle />
                <IntlAppProvider>
                    <RouterProvider router={router} />
                </IntlAppProvider>
            </Wrapper>
        </ThemeProvider>
    );
};

export default App;

import { GlobalStyle } from '../Home/style';
import { FlexWrapper, Wrapper } from './style';
import {
    Link,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import Home from '../Home';
import About, { AboutContent } from '../About';
import Stats from '../Stats';
import Layout from '../Layout';
import { useEffect, useState } from 'react';

import { open } from '../../utils/indexdb';
import Spinner from '../Spinner';
import { CurrencyProvider } from '../../providers/context';

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
        </Route>
    )
);
const App = () => {
    const [loading, setLoading] = useState(true);

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
        <Wrapper>
            <GlobalStyle />
            <CurrencyProvider>
                <RouterProvider router={router} />
            </CurrencyProvider>
        </Wrapper>
    );
};

export default App;



import { GlobalStyle } from "../Home/style";
import { Wrapper } from "./style";
import { Link, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../Home"
import About, { AboutContent } from '../About'
import Stats from '../Stats'
import Layout from "../Layout";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<div><Link to={`/`}>Something went wrong. Go back home</Link></div>}>
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
    return (
        <Wrapper>
            <GlobalStyle />
            <RouterProvider router={router} />
        </Wrapper>
    )
}

export default App;
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "../pages/Home";
import Details from "../pages/Details";
import Favoritos from "../pages/Favoritos";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/AT-Fundamentos_React",
        element: <Home />,
    },
    {
        path: "/AT-Fundamentos_React/details/:hotelId",
        element: <Details />,
    },
    {
        path: "/AT-Fundamentos_React/favoritos",
        element: <Favoritos />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

const routes = () => {
    return (
        <RouterProvider router={router}/>
    );
}

export default routes;

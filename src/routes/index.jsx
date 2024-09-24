import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from "../pages/Home";
import Lista from "../pages/Lista";
import Favoritos from "../pages/Favoritos";
import Admin from "../pages/Admin";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/AT-Fundamentos_React",
        element: <Home />,
    },
    {
        path: "/lista",
        element: <Lista />,
    },
    {
        path: "/favoritos",
        element: <Favoritos />,
    },
    {
        path: "/admin",
        element: <Admin />,
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

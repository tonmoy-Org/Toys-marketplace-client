import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import SignUp from "../Pages/Shared/SignUp/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToy from "../Pages/MyToy/MyToy";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import PrivateRoutes from "./PrivateRoutes";
import Blogs from "../Pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'addToy',
                element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>
            },
            {
                path: 'allToys',
                element: <AllToys></AllToys>,
                loader: () => fetch('https://toy-marketplace-server-phi.vercel.app/addToys')
            },
            {
                path: 'myToy',
                element: <PrivateRoutes><MyToy></MyToy></PrivateRoutes>
            },
            {
                path:'toyDetails/:id',
                element: <PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`https://toy-marketplace-server-phi.vercel.app/addToys/${params.id}`)
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            }

        ]
    },
]);
export default router;
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import { ToastContainer} from 'react-toastify';
import Navbar from "../Pages/Shared/Navbar/navbar";
const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Main;
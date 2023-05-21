import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { ToastContainer} from 'react-toastify';
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
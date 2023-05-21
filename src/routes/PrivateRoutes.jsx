import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user, loading } = useContext(AuthContext);
    const location = useLocation(); 

    if(loading){
        return <div className='flex justify-center my-52'><progress className="progress progress-success w-56"></progress></div>
    }
    if(user?.email){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;
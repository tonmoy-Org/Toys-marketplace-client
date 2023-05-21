
import { NavLink } from 'react-router-dom';
import './ActiveLinks.css'
const ActiveLinks = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "active" : "" }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLinks;
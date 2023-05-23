import { Link } from "react-router-dom";
import logo from '../../../assets/logo/logo.png'
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext, useState } from "react";
import ActiveLinks from "../../../ActiveLinks/ActiveLinks";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isHovered, setIsHovered] = useState(false);

    // firebase logOut
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="navbar  bg-opacity bg-[#004e96]  lg:px-12 py-0 text-white">
            <div className="flex gap-2 items-center">
                <Link to='/'><img className="w-20 lg:w-28 rounded-md" src={logo} alt="" /></Link>
                <Link to='/'><h2 className="text-xl font-bold">ToyZone</h2></Link>
            </div>
            <div className="navbar hidden lg:flex justify-center">
                <ul className="px-4 gap-10 font-semibold">
                    <li><ActiveLinks to='/'>Home</ActiveLinks></li>
                    <li><ActiveLinks to='/allToys'>All Toys</ActiveLinks></li>
                    <li><ActiveLinks to='/myToy'>My Toys</ActiveLinks></li>
                    <li><ActiveLinks to='/addToy'>Add A Toy</ActiveLinks></li>
                    <li><ActiveLinks to='/blogs'>Blogs</ActiveLinks></li>
                </ul>
            </div>

            <div className="flex-none mx-auto ms-36">

                {user &&
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <div>
                                    <img src={user.photoURL}
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    />
                                </div>
                            </div>
                        </label>
                        {/* to display the hover effect on profile picture */}
                        {isHovered &&
                            <div className='absolute  bg-slate-600 text-white rounded-md shadow-md 
                            px-2 py-1 top-2 mr-1 w-52 right-12'>
                                <span className='font-normal'>{user.displayName}</span>
                            </div>
                        }
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-1 lg:text-black text-white font-semibold shadow bg-[#004e96]  lg:bg-base-100 rounded-box">
                            <li>
                                <p className="justify-between">
                                    {user.displayName} <br />
                                    {user.email}
                                    <span className="badge">New</span>
                                </p>
                            </li>
                            <li><Link to='/allToys'>All Toys</Link></li>
                            <li><Link to='/myToy'>My Toys</Link></li>
                            <li><Link to='/addToy'>Add A Toy</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            <li><Link onClick={handleLogOut}>Logout</Link></li>
                        </ul>
                    </div>
                }
            </div>
            {
                user ?
                    <></>
                    : <Link className="btn btn-xs font-bold" to='/login'>LogIn</Link>
            }

        </div>
    );
};

export default Navbar;
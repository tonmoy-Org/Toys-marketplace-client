
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FacebookAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../firebase/firebase.config";
import google from '../../../assets/logo/google.jpg'
import facebook from '../../../assets/logo/fb.png'
import Title from "../../../hooks/Title";


const Login = () => {
    Title('Login')
    const auth = getAuth(app);
    const { signIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');
        if (password.length < 6) {
            setError('Password is less than 6 characters');
            return;
        }
        else if (password.length > 8) {
            setError('Password is longer than 8 characters');
            return;
        }
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
                console.error(error.message);
            })
    }
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    }

    const handleFacebookLogin = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const loggedUserFacebook = result.user;
                console.log(loggedUserFacebook);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }
    return (
        <div className="lg:hero min-h-[85vh] bg-base-100 py-28">
            <div className="lg:hero-content flex-col lg:w-6/12">
                <div className="card flex-shrink-0 w-full lg:max-w-sm lg:shadow-2xl bg-base-100 rounded-none">
                    <div className="card-body">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Login now</h1>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                    <small className='text-[#004e96]' onClick={() => setShow(!show)}>
                                        <>
                                            {
                                                show ? <span>Hide</span> : <span>Show</span>
                                            }
                                        </>
                                    </small>
                                </label>
                                <input type={show ? "text" : "password"} name='password' placeholder="password" className="input input-bordered rounded-none" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#004e96] hover:bg-[#004e96] rounded-none text-white " type="submit" value="Login" />
                            </div>
                        </form>
                        <br />
                        <div className="mb-5">
                            <div>
                                <button onClick={handleGoogleLogin} className="flex items-center gap-4 justify-center border-2 px-28 py-2 border-gray-300 rounded-sm">
                                    <img className="w-8 h-8 rounded-full" src={google} alt="" />
                                    <p className="text-base">Google</p>
                                </button>
                            </div>
                            <div className="mt-3">
                                <button onClick={handleFacebookLogin} className="flex items-center gap-4 justify-center border-2 px-28 py-2 border-gray-300 rounded-sm">
                                    <img className="w-8 h-8 rounded-full" src={facebook} alt="" />
                                    <p className="text-base">Facebook</p>
                                </button>
                            </div>
                        </div>
                        <div>
                            <p>New to ToyZone ? <Link className="text-[#004e96] font-semibold" to="/signUp">Sign in</Link></p>
                            <p className="text-red-600 py-3">{error}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
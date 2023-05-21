
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
        <div className="hero min-h-[85vh] bg-base-200">
            <div className="hero-content flex-col lg:w-6/12">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Login now</h1>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                    <small className='text-blue-600' onClick={() => setShow(!show)}>
                                        <>
                                            {
                                                show ? <span>Hide</span> : <span>Show</span>
                                            }
                                        </>
                                    </small>
                                </label>
                                <input type={show ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-success text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <br />
                        <div className="text-center mb-5">
                            <button onClick={handleGoogleLogin} className="mr-6 transform transition duration-300 ease hover:-translate-y-1 hover:scale-95"><img className="w-10 mx-auto rounded-full" src={google} alt="" /></button>
                            <button onClick={handleFacebookLogin} className="transform transition duration-300 ease hover:-translate-y-1 hover:scale-95"><img className="w-10 mx-auto rounded-full" src={facebook} alt="" /></button>
                        </div>
                        <div>
                            <p>New to ToyZone ? <Link className="text-primary" to="/signUp">Sign in</Link></p>
                            <p className="text-red-600 py-3">{error}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
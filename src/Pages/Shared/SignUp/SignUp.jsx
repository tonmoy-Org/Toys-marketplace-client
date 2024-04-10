import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import Title from "../../../hooks/Title";

const SignUp = () => {
    Title('Sign up')
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);

    const handleSignUp = (event) => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const photoUrl = from.photo.value;
        const password = from.password.value;
        console.log(name, email, password, photoUrl);


        setError('');
        if (password.length < 6) {
            setError('Password is less than 6 characters');
            return;
        }
        else if (password.length > 8) {
            setError('Password is longer than 8 characters');
            return;
        }
        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
                updateUserData(newUser, name, photoUrl);
                Swal.fire({
                    title: 'Successfully Created Account',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })

            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })

    }
    const updateUserData = (user, name, photoUrl) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoUrl
        })
            .then(() => {

            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className="lg:hero  min-h-screen bg-base-100 py-28">
            <div className="lg:hero-content flex-col lg:w-6/12">
                <h1 className="text-2xl font-semibold text-[#004e96] px-5">Make the most of your joy full life  with ToyZone</h1>
                <div className="card flex-shrink-0 w-full max-w-sm lg:shadow-2xl bg-base-100 rounded-none">
                    <div className="card-body">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Register Now</h1>
                        </div>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo" className="input input-bordered rounded-none" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                    <small className='text-[#004e96] font-semibold' onClick={() => setShow(!show)}>
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
                                <input className="btn bg-[#004e96] hover:bg-[#004e96] rounded-none text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p>Already to ToyZone ? <Link className="text-[#004e96] font-semibold" to="/login">logIn</Link></p>
                        <p className="text-red-600 py-3">{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
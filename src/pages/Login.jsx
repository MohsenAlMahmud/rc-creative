import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import Swal from "sweetalert2";


const Login = () => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()

    const { signIn } = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();

    console.log(location)

    
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                Swal.fire('You are successfully login')                
                // Swal.fire('Congratulation')
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
                
            })
    }

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                Swal.fire('You are successfully login')
                // console.log(result.user);               
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl text-center py-16">Please Login</h2>
            <form onSubmit={handleLogin} className="w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>

            </form>
            <p className="text-center mt-4">Do not have an account? <Link to='/register' className="text-blue-500">Register</Link></p>
            <div className="w-1/2 mx-auto">
                <button onClick={handleGoogleSignIn} className="btn btn-accent w-full mt-4">Google Login</button>
            </div>
        </div>
    );
};

export default Login;
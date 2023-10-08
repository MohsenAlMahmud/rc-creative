import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);
        setRegisterError('');

        if(password.length < 6){
            setRegisterError();
            Swal.fire('use 6 character')
            return;
        }else if(!/[A-Z]/.test(password)){
            setRegisterError();
            Swal.fire('use atleast 1 capital letter')
            return;
        }else if(!/[#$%&]/.test(password)){
            setRegisterError();
            Swal.fire('use at-least 1 special character')
            return;
        }

        createUser(email, password)
            .then(result => {                
                Swal.fire('You registered successfully')
                navigate('/');
            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-4xl text-center py-16">Please Register</h2>
                <form onSubmit={handleRegister} className="w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account? <Link to='/login' className="text-blue-500">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
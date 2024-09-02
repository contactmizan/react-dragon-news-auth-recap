import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password')
        console.log(name, photo, email, password);

        //create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl my-10 text-center">Please Register</h2>

                <div className="hero bg-base-200 py-10">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"
                                        name="name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text"
                                        name="photo" placeholder="Photo URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"
                                        name="email" placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"
                                        name="password"
                                        placeholder="Password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <p className="p-4">Already have an account? please <Link className="underline hover:text-blue-500" to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Register;
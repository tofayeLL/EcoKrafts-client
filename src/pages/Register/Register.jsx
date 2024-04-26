

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AUthContext } from "../../providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AUthContext);
  
    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, photo, password);

        // create user
        createUser(email, password)
        .then((result) => {
            console.log(result.user);
        })
        .catch((error) => {
            console.log(error.message);
        })
    }






    return (
        <div>

            <div className="flex flex-col justify-center items-center bg-violet-300 py-4 ">


                <div className="flex flex-col justify-center  lg:w-[100vh] mx-auto space-y-3 my-6 bg-white shadow-xl lg:px-0 px-8  lg:py-12 py-6 rounded-md" >



                    <div className=" mx-auto text-violet-600 ">
                        <h1 className="lg:text-4xl text-xl font-bold mb-6">Create an account</h1>
                    </div>


                    <form onSubmit={handleRegister} className="lg:w-[70%] mx-auto space-y-5  rounded-lg ">

                        <div >
                            <p className="mb-1 font-medium">User Name</p>
                            <input type="text" name="name" placeholder="Username" className="input input-bordered w-full" />
                        </div>

                        <div >
                            <p className="mb-1 font-medium">Photo Url</p>
                            <input type="text" name="photo" placeholder="photo url" className="input input-bordered w-full" />
                        </div>

                        <div>
                            <p className="mb-1 font-medium">User Email</p>
                            <input type="email" name="email" placeholder="Email address" className="input input-bordered w-full" required />
                        </div>

                        <div >
                            <p className="mb-1 font-medium"> Password</p>
                            <input type="password" name="password" placeholder="password" className="input input-bordered w-full" required />
                           {/*  <div className="relative">
                                <input type={showPass ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered w-full" required />

                                <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-3">{showPass ? <FiEyeOff className="text-xl" ></FiEyeOff> : <FiEye className="text-xl"></FiEye>}</span>

                            </div> */}
                        </div>

                        <div className="text-center">

                         {/* <p className="text-red-500 text-bold">{errorRegister.replace('auth/', '')}</p> */}
                        </div>


                        <div>
                            <button className="btn text-white text-lg w-full bg-violet-500" type="submit">Register</button>
                        </div>




                    </form>




                    <div className="text-center ">
                        <p className="font-medium mt-6 text-sm mr-2">have an account ?   Please  <Link to={'/login'} className="btn-active text-violet-800 btn-link">Login</Link></p>
                    </div>




                </div>
            </div>

        </div>
    );
};

export default Register;
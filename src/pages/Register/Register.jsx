
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AUthContext } from "../../providers/AuthProvider";
import { FiEye, FiEyeOff } from "react-icons/fi";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const [errorRegister, setErrorRegister] = useState('');
    const { createUser, updateUser } = useContext(AUthContext);

    // after register user redirect to the login page
   const navigate = useNavigate();




    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        // validation for password
        setErrorRegister('');

        if (password.length < 6) {

            return toast.error(" passwords must be 6 characters!");
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {

            return toast.error("password must have included at least one small and capital letter!");
        }




        // create user
        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success("Registration complete Successfully");
                updateUser(name, photo);
                navigate('/login')
                e.target.reset();
            })
            .catch((error) => {
                console.log(error.message);
                setErrorRegister(error.message);

            })
    }



    return (
        <div>


            <div className="flex flex-col  justify-center items-center bg-violet-300 py-4">


                <div className="flex flex-col justify-center lg:w-[100vh] w-[80%] mx-auto space-y-4 my-6 bg-white shadow-xl lg:px-0   px-5  lg:py-12 py-6 rounded-md " >



                    <div className=" mx-auto text-purple-500">
                        <h1 className="lg:text-4xl text-xl font-bold mb-6">Create an account</h1>
                    </div>


                    <form onSubmit={handleRegister} className="lg:w-[70%] w-full mx-auto space-y-5 rounded-lg " >

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

                            <div className="relative">
                                <input type={showPass ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered w-full" required />

                                <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-3">{showPass ? <FiEyeOff className="text-xl" ></FiEyeOff> : <FiEye className="text-xl"></FiEye>}</span>

                            </div>
                        </div>

                        <div className="text-center">

                            <p className="text-red-500 lg:text-lg text-sm font-semibold">{errorRegister.replace('auth/', '')}</p>
                        </div>


                        <div>
                            {/* daisy ui button */}
                            {/*   <button className="btn text-white text-lg w-full bg-purple-600" type="submit">Register</button> */}

                            <button className="relative inline-flex items-center justify-center  w-full  py-2.5 overflow-hidden font-mono font-medium tracking-tighter text-white bg-purple-500 rounded-lg group" type="submit">
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-violet-800 rounded-lg group-hover:w-full group-hover:h-full"></span>
                                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-900  "></span>
                                <span className="relative text-lg font-semibold">Register</span>
                            </button>

                        </div>




                    </form>




                    <div className="text-center ">
                        <p className="font-medium mt-6  lg:text-base text-sm mr-2">have an account ?   Please  <Link to={'/login'} className="btn-active text-violet-800 btn-link">Login</Link></p>
                    </div>




                </div>
            </div>

        </div>
    );
};

export default Register;

import { Link, NavLink } from "react-router-dom";


const Nav = () => {

    const links = <>
        <li className="font-medium text-base"><NavLink to={'/'}>Home</NavLink></li>
        <li className="font-medium text-base"><NavLink to={'/allCrafts'}>All Crafts</NavLink></li>
        <li className="font-medium text-base"><NavLink to={'/addCrafts'}>Add Crafts</NavLink></li>
        <li className="font-medium text-base"><NavLink to={'/myAddedCrafts'}>My Added Crafts</NavLink></li>

    </>

    return (
        <div >



            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }

                        </ul>
                    </div>
                    <a className="btn btn-ghost lg:text-4xl  text-lg font-bold gap-0">Eco<span className="text-purple-600 0">Krafts</span> </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2 ">
                        {
                            links
                        }

                    </ul>
                </div>
                <div className="navbar-end lg:space-x-3 space-x-2">
                    <Link to={'/login'}><button className="btn text-white hover:text-violet-500 font-semibold lg:text-base text-xs bg-violet-400 0">Login</button></Link>
                    <Link to={'/register'}><button className="btn  text-white hover:text-violet-500 font-semibold lg:text-base text-xs  bg-violet-400 0">Register</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Nav;
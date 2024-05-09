import './HomeBO.sass'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function HomeBO() {

    

    return (
    <>
        <div className="navbar-BO">
            <div className="navbar-BO-content">
            <Link to='/'><img src="/images/home-3/logo.png" className="hidden lg:block w-100" alt="website_logo" /></Link>
                <h1>Welcome Admin !</h1>
                <nav>
                    <NavLink className=" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative" to='/backoffice'>Home</NavLink>
                    <NavLink className=" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative" to='/backoffice/about'>About</NavLink>
                    <NavLink className=" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative" to='/backoffice/rooms'>Rooms</NavLink>
                    <NavLink className=" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative" to='/backoffice/page'>Page</NavLink>
                    <NavLink className=" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative" to='/backoffice/blog'>Blog</NavLink>
                    <NavLink className=" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-300 group relative" to='/backoffice/contact'>Contact</NavLink>
                </nav>
            </div>
        </div>
    </>
    );
}
import { Link, NavLink } from "react-router-dom"
import './NavbarBO.sass'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../../Redux/features/userSlice'

export default function NavbarBO() {

    useEffect(() => {
        try {
            const token = localStorage.getItem("access_token")
            axios.get('http://127.0.0.1:8000/api/get_user/', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    console.log("test");
                    console.log(response.data.user);
                    dispatch(setUser(response.data.user))
                })

        } catch (error) {
            console.log(error);
        }
    }, [])

    const dispatch = useDispatch()
    const utilisateur = useSelector(state => state.user.user)

    // console.log(utilisateur);

    return (
        <>
            {utilisateur ? <div className="navbar-BO h-screen" >
            <div className="navbar-BO-content" data-aos="fade-up" data-aos-duration="1000">
                <Link to='/'><img src="/images/home-3/logo.png" className="hidden lg:block w-100" alt="website_logo" /></Link>
                <h1>Hi {utilisateur.username}</h1>
                <nav>
                    {utilisateur.role === 'admin' ? <>
                        <NavLink className=" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-200 group relative link-bo" to='/backoffice'>Home</NavLink>
                        <NavLink className=" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-200 group relative link-bo" to='/backoffice/hotel'>Hotel</NavLink>
                        <NavLink className=" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-200 group relative link-bo" to='/backoffice/employees'>Employees</NavLink>
                        <NavLink className=" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-200 group relative link-bo" to='/backoffice/facilities'>Facilities</NavLink>
                        <NavLink className=" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-200 group relative link-bo" to='/backoffice/testimonials'>Testimonials</NavLink>
                        <NavLink className=" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-200 group relative link-bo" to='/backoffice/faq'>F.A.Q.</NavLink>
                        <NavLink className=" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-200 group relative link-bo" to='/backoffice/blog'>Blog</NavLink>
                        <NavLink className=" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-200 group relative link-bo" to='/backoffice/contact'>Contact</NavLink>
                        <NavLink className=" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-200 group relative link-bo" to='/backoffice/users'>Users</NavLink></> : utilisateur.role === 'webmaster' ? <>
                            <NavLink className=" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-200 group relative link-bo" to='/backoffice/employees'>Employees</NavLink>
                            <NavLink className=" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-200 group relative link-bo" to='/backoffice/testimonials'>Testimonials</NavLink>
                            <NavLink className=" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-200 group relative link-bo" to='/backoffice/blog'>Blog</NavLink>
                            <NavLink className=" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-200 group relative link-bo" to='/backoffice/contact'>Contact</NavLink>
                        </> : utilisateur.role === 'redacteur' ? <><NavLink className=" text-lightBlack lg:text-white dark:text-white  lg:border-b-0 px-3 py-2 w-full block transition-all duration-200 group relative link-bo" to='/backoffice/blog'>Blog</NavLink></> : null}
                </nav>
            </div>
        </div> : null}
        </>
    )
}
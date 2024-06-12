import { signOut } from 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../asset/logo.png';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import UseToken from '../../Hooks/UseToken';
import { useEffect, useState } from 'react';

const Navbar = () => {
    

    const [user] = useAuthState(auth);

    const logOut = () => {

        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    // user data

    // const userData = {
    //     displayName: user && user?.displayName,
    //     photoURL: user && user?.photoURL,
    //     email: user && user?.email,
    //     coin: 50
    // }


    // user data

    // const handleLogin = () => {
    //     signInWithGoogle()


    // };

    // const [dbUser, setUser] = useState([]);

    // useEffect(() => {
    //     fetch('https://recipe-sharing-web-server.onrender.com/user')
    //         .then(res => res.json())
    //         .then(data => setUser(data))
    // }, []);

    const menuItems = <>
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><NavLink to='/colleges'>Colleges</NavLink></li>
        <li><NavLink to='/admission'>Admission</NavLink></li>
        <li><NavLink to='/my-college'>My College</NavLink></li>
    </>
    return (

        <div className="navbar flex justify-between bg-base-100 text-[16px] lg:px-24 sticky top-0 z-10">
            <div className="navbar">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                        
                    </ul>
                </div>
                <NavLink className='text-2xl font-serif font-bold text-primary' to='/'>
                    <img width={50} src={image} alt="" />
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 gap-2">
                    {menuItems}
                    {
                        user && <Link to="my-profile" className='flex items-center gap-2'>
                        { user?.photoURL  && <img className='w-[40px] h-[40px] rounded-full' src={ user?.photoURL} alt="" /> }
                            <p>{user && user?.displayName}</p>
                        </Link>
                    }
                </ul>
            </div>
            {
                user ? <button onClick={() => logOut()} className='border border-primary text-primary rounded-full transition-all duration-700 ease-in-out py-2 px-8 hover:bg-primary hover:border-primary mx-2 hover:text-gray-100'>Logout</button> : <Link to="login" className='border border-primary text-primary rounded-full transition-all duration-700 ease-in-out py-2 px-8 hover:bg-primary hover:border-primary mx-2 hover:text-gray-100'>Login</Link>
            }
        </div>
    );
};

export default Navbar;
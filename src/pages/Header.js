import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import profile from '../assets/img/profile.png'
import auth from '../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    return (
        <div className="navbar bg-error text-white">
            <div className="flex-1">
                <div className="dropdown bg-error">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-error rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/tutors'>Tutors</Link></li>
                        <li><Link to='/tuitions'>Tuitions</Link></li>
                        <li><Link to='/contacts'>Contacts</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl ">টিউশন-ই</a>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal p-">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/tutors'>Tutors</Link></li>
                    <li><Link to='/tuitions'>Tuitions</Link></li>
                    <li><Link to='/contacts'>Contacts</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>

            </div>
            <div className="flex-2 gap-2 ">


                <div className="dropdown dropdown-end mr-2">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={profile} />
                        </div>
                    </label>
                    <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-error rounded-box w-52">

                        <li><Link className="justify-between" to='/'>About <span className="badge">New</span></Link></li>
                        {user ? <li><button onClick={logout}>Logout</button></li> : <ul><li><Link to='/login'>Login</Link></li>
                            <li><Link to='/register'>Register</Link></li></ul>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;


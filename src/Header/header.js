import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import DehazeIcon from '@mui/icons-material/Dehaze';
import logo from '../Media/img/logo.png'
// import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    // const { user, logOut } = useAuth();
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <span className="navbar-brand mb-0 h1"><img style={{ width: "180px", cursor: 'pointer' }} src={`${logo}`} alt="logo" /></span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <DehazeIcon />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/home'>HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/aboutUs'>ABOUT US</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/services'>SERVICES</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/projects'>PROJECTS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/page'>PAGE</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/blog'>BLOG</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contact'>CONTACT</NavLink>
                            </li>
                            {/* {user.email && */}
                            <li className="nav-item">
                                <NavLink to='/admin'>ADMIN</NavLink>
                            </li>
                            {/* } */}
                        </ul>
                        <form className="d-flex">
                            {/* <span className="userName">{user?.displayName}</span>
                            {
                                user.email ?
                                    <NavLink to='/signIn' onClick={logOut}>SignOut</NavLink>
                                    : */}
                            <NavLink to='/signIn'>SIGN IN</NavLink>
                            {/* } */}
                        </form>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Header;
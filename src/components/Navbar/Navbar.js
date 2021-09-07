import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../lib/auth';
import './Navbar.css';

const Navbar = () => {
    const { signOut, user } = useAuth();
    const [nav, setNav] = useState(false);
    const [isAdmin, setIsAdmin] = useState();

    useEffect(() => {
        fetch('https://aqueous-depths-21897.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user?.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    const changeBackground = () => {
        if (window.scrollY > 100) {
            setNav(true)
        }
        else {
            setNav(false)
        }
    }

    window.addEventListener('scroll', changeBackground)
    return (
        <nav class={"navbar fixed-top navbar-expand-lg navbar-dark my-navbar"}>
            <div class="container ">
                <Link class="navbar-brand main-name" to="/">Prothom Alu</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="mx-auto"></div>
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/category">Category</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" style={{ display: isAdmin ? 'block' : 'none' }} to="/admin/addAdmin">Admin Dashboard</Link>
                        </li>
                        {/* {!user?.email && <li class="nav-item">
                            <Link className="btn btn-primary nav-link" to="/login">Login</Link>
                        </li>} */}
                        {user?.email && <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle btn btn-primary" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {user ? user.email : 'Login'}
                            </Link>
                           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><button  class="dropdown-item btn btn-primary" onClick={signOut}>Logout</button></li>
                            </ul>
                        </li>}
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
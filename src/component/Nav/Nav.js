import React from 'react';
import { Link, Route } from 'react-router-dom';
import logo from '../../assets/eventteller.png';
import route from './../../route'
import './Nav.css'

export default function Nav() {
    return(
        <div>
            <nav className='nav'>
                <div className="nav-bar-left">
                <Link to='/'>
                    <div>
                        <img src={logo} className="app_logo" alt="logo" width="180px" />
                    </div>
                    </Link>
                </div>
                <div className="nav-bar-right">
                    <Link to='/'>
                        <button className="btn btn-success btn-lg">HOME</button>
                    </Link>
                    <Link to='/results'>
                        <button className="btn btn-success btn-lg">SEARCH</button>
                    </Link>
                    <Link to='/favorites'>
                        <button className="btn btn-success btn-lg">FAVORITES</button>
                    </Link>
                    <a href={process.env.REACT_APP_LOGIN}>
                        <button className='btn btn-success btn-lg'>LOGIN</button>
                    </a>
                </div>
            </nav>
            NAV
            
        </div>
    )
}
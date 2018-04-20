import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/eventteller.png';
// import route from './../../route';
import './Footer.css'

export default function Footer(){
    return(
        <footer className='footer'>
            <div className='footer-left-bar'>
                <Link to='/'>
                        <img src={logo} className="footer_logo" alt="logo" width="120px" />
                </Link>
            </div>
            <div className='footer-bar-right'>
            <Link to='/profile'>
                <button className="btn btn-success btn-lg">PROFILE</button>
                </Link>
                <button className="btn btn-success btn-lg"><a href="http://localhost:3002/auth/logout">LOGOUT</a></button>
            </div>
        </footer>
    )
}
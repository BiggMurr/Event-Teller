import React from 'react';
import './Login.css';

export default function Login() {
    return (
        <div className='App'>
            <a href={process.env.REACT_APP_LOGIN}>
                <button className=''>Login</button>
            </a>
        </div>
    )
}
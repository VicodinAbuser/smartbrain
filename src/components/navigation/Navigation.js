import React from 'react';
import Logo from '../logo/Logo.js';

function Navigation({ onRouteChange, isSignedIn }) {
    if(isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Logo />
            <p onClick={() => onRouteChange('signin')} className='fa3 dim pointer pa3 black underline link'>Sign Out</p>
            </nav>
        )
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className='fa3 dim pointer pa3 black underline link'>Sign In</p>

            <p onClick={() => onRouteChange('register')} className='fa3 dim pointer pa3 black underline link'>Register</p>
            </nav>
        )
    }

}

export default Navigation;

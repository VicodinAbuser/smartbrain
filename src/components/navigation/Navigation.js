import React from 'react';
import Logo from '../logo/Logo.js';

function Navigation({ onRouteChange, isSignedIn }) {
    if(isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Logo />
            <p className='fa3 pa3 black underline '><span onClick={() => onRouteChange('signin')} className='pointer dim link'>Sign Out</span></p>
            </nav>
        )
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Logo />
            <p className='fa3 pa2 black underline '><span onClick={() => onRouteChange('signin')} className='pointer dim link'>Sign In</span></p>

            <p className='fa3 pa2 pr3 black underline '><span onClick={() => onRouteChange('register')} className='pointer dim link'>Register</span></p>
            </nav>
        )
    }

}

export default Navigation;

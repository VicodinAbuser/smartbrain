import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

function Logo() {
    return(
        <div className='ma4  ' style={{marginRight: 'auto'}}>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 120, width: 120 }} >
                <div className="Tilt-inner pa3">
                 <img  src={brain} alt='logo' />
                </div>
            </Tilt>
        </div>

    )
}

export default Logo;

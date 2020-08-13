import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

function Logo() {
    return(
        <div className='ma3' style={{marginRight: 'auto'}}>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 130, width: 130 }} >
                <div className="Tilt-inner pa0">
                 <img  src={brain} alt='logo' />
                 <span>SMART BRAIN</span>
                </div>
            </Tilt>
        </div>

    )
}

export default Logo;

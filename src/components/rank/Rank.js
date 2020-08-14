import React from 'react';
import './Rank.css';

function Rank({ username, faces }) {
    return(
        <div className='mt4'>
            <div className='white f3'>
            {`${username}, the number of faces detected is...`}
            </div>
            <div className='white f1'>
            {faces}
            </div>
        </div>
    )
}

export default Rank;

import React from 'react';
import './Rank.css';

function Rank({ username, entries }) {
    return(
        <div className='mt4'>
            <div className='white f3'>
            {`${username}, your entry count is...`}
            </div>
            <div className='white f1'>
            {entries}
            </div>
        </div>
    )
}

export default Rank;

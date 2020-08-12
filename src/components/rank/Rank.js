import React from 'react';

function Rank({ username, entries }) {
    return(
        <div>
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

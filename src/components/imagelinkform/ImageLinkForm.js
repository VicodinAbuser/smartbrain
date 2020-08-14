import React from 'react';
import './ImageLinkForm.css';

function ImageLinkForm({ onInputChange, onButtonSubmit }) {
    return (
        <div>

            <div className='center mv5'>
            <div className='center pa3 br3 shadow-5 form'>
            <input className='f4 center pa2 w-70' type='text' onChange={onInputChange} />
            <button onClick={onButtonSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple ba b--light-purple' type='submit'>Detect</button>
            </div>
            </div>
            <p className='f4'>
            <p className='mh7'>This SmartBrain App will detect faces in your pictures! Give it a try!</p>
            <p className='mh7'>Search for a picture. Right click and select Copy Image Address on PC or open the image in a new tab and copy the url in the url box on mobile. Paste it in the box above and hit Detect!</p>
            </p>
        </div>
    )
}

export default ImageLinkForm;

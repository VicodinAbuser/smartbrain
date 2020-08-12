import React from 'react';
import './ImageLinkForm.css';

function ImageLinkForm({ onInputChange, onButtonSubmit }) {
    return (
        <div>
            <p className='f3'>
            {'This SmartBrain App will detect faces in your pictures! Give it a try!'}
            </p>
            <div className='center'>
            <div className='center pa3 br3 shadow-5 form'>
            <input className='f4 center pa2 w-70' type='text' onChange={onInputChange} />
            <button onClick={onButtonSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple ba b--light-purple' type='submit'>Detect</button>
            </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;

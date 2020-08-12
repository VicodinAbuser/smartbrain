import React from 'react';
import './FaceRecognition.css';

function FaceRecognition({ imageURL, boxes }) {
    if(boxes) {
        const faceBoxes = boxes.map((box, idx) => {
            return(<div className='bounding-box' key={idx} style={{top: box.topRow, bottom: box.bottomRow, right: box.rightColumn, left: box.leftColumn}}></div>)
        })
        return(
            <div className='center pa3 ma'>
                <div className='absolute mv4'>
                    {(imageURL) &&
                          <div>
                          <img id='inputimage' src={imageURL} alt='FaceRecognition' width='500px' height='auto'/>
                           {faceBoxes}
                          </div>
                    }
                </div>
            </div>
        )
    } else {
        return(
            <div className='center pa3 ma'>
                <div className='absolute mv4'>
                    {(imageURL) &&
                          <div>
                          <img id='inputimage' src={imageURL} alt='FaceRecognition' width='500px' height='auto'/>
                          </div>
                    }
                </div>
            </div>
        )
    }

}

export default FaceRecognition;

import React from 'react'
import './Upload.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Upload = (props) => {

    const { altPicText, instruction, children: childComponents } = props;
    return (
        <div className="upload">
            { altPicText && (
                <div className="upload__alt-pic">
                    <div className="upload__overlay"></div>
                    <span className="upload__alt-pic-text"> {altPicText} </span>

                    <div className="upload__overlay-details upload__overlay-details_fadeIn-bottom">
                        <span> <FontAwesomeIcon icon="camera" /> </span>
                    </div>
                </div>
            )}

           { instruction && (
               <React.Fragment>
                   <p className="upload__title"> Upload Instructions </p>
                   <small className="upload__instruction"> {instruction} </small>
               </React.Fragment>
            )}

           {childComponents}
        </div>
    )
}

export default Upload

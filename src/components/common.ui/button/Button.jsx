import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Button.scss'

const SubmitButton = (props) => {
    
    const {text, type, submittingText, isSubmitting, handleOnClick, btnModifiers} = props;
    
    return (
        <div>
            <button type={type} className={`button ${btnModifiers}`} onClick={handleOnClick} >
                { (type === 'submit' && isSubmitting) ? 
                    <React.Fragment>
                        <span className="button__text"> {submittingText} </span>
                        <span className="button__spinner"> <FontAwesomeIcon icon="spinner" spin /> </span>
                    </React.Fragment>
                    : <span className="button__text"> {text} </span>
                }
            </button>
        </div>
    )
}

export default SubmitButton

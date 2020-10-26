import React from 'react'
import SuccessSvg from './success-svg/SuccessSvg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SuccessPopup.scss'

const SuccessPopup = ({isOpenPopup, closePopup}) => {
    return (
        <div className={`success-popup ${isOpenPopup && 'success-popup_open'} `}>
            <div className="success-popup__wrapper">
                <div className={`success-popup__check ${isOpenPopup && 'success-popup__check_active'} `}>
                    <SuccessSvg />
                </div>
                <span onClick={() => closePopup(false)} className="success-popup__close-button"> 
                    <FontAwesomeIcon icon="times-circle" />  
                </span>
            </div>
        </div>
    )
}

export default SuccessPopup

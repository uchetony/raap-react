import React from 'react'
import { Link } from 'react-router-dom'
import mobileLogo from '../../../../static/images/logo.png'

const MobileNavbar = ({toggleSidebar, isOpenSidebar}) => {

    const handleOpenSidebar = () => {
        toggleSidebar(!isOpenSidebar);
    }

    return (
        <div className="mobile-navbar">
            <div className="mobile-navbar__logo">
                <Link className="mobile-navbar__logo-link" to={'/'}>
                    <img className="mobile-navbar__image" src={mobileLogo} alt="raap"/>
                </Link>
            </div>

            <div 
                className={`mobile-navbar__menu-icon ${isOpenSidebar && 'mobile-navbar__menu-icon_show-close'}`}
                onClick={handleOpenSidebar}
            >
                <span className="mobile-navbar__hamburger mobile-navbar__hamburger-top"></span>
                <span className="mobile-navbar__hamburger mobile-navbar__hamburger-middle"></span>
                <span className="mobile-navbar__hamburger mobile-navbar__hamburger-bottom"></span>
            </div>
        </div>
    )
}

export default MobileNavbar

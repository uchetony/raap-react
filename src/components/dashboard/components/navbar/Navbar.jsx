import React from 'react'
import MobileNavbar from './MobileNavbar'
import DesktopNavbar from './DesktopNavbar'
import './Navbar.scss'

const Navbar = (props) => {
    const { path, location, toggleSidebar, isOpenSidebar } = props;

    return (
        <nav className="navbar">
            <MobileNavbar toggleSidebar={toggleSidebar} isOpenSidebar={isOpenSidebar} />
            <DesktopNavbar path={path} location={location} />
        </nav>
    )
}

export default Navbar

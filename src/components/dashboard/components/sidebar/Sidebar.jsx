import React from 'react'
import './Sidebar.scss'
import { Link } from 'react-router-dom'
import sidebarLogo from '../../../../static/images/logo.png'
import userPicture from '../../../../static/images/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Sidebar.scss'

const Sidebar = (props) => {

    const {path, location, isOpenSidebar, toggleSidebar} = props;

    const sidebarLinks = [
        {link: `${path}/request`, linkText: 'Request', icon: 'file-invoice-dollar', badge: 3 },
        {link: `${path}/beneficiaries`, linkText: 'Beneficiaries', icon: 'user-friends' },
        {
            link: `${path}/settings/account-details`, linkText: 'Settings', 
            icon: 'cog', 
            subLinks: [
                {link: `${path}/settings/account-details`, linkText: 'Account Details'},
                {link: `${path}/settings/users`, linkText: 'Users'},
                {link: `${path}/settings/expense-categories`, linkText: 'Expense Categories'},
            ] 
        },
    ]

    const isActiveLink = (el) => {
        const locArray = location.pathname.split('/');
        let result;
        if(el.subLinks) {
            const flatSubLinksArray = el.subLinks.map((el) => (
                el.link.split('/')[el.link.split('/').length-1]
            ))
            
            if(flatSubLinksArray.includes(locArray[locArray.length-1])){
                result = true;
            }
        } else {
            if(location.pathname === el.link){
                result = true
            }
        }

        return result
    }

    return (
        <div className={`sidebar sidebar_close ${isOpenSidebar && 'sidebar_open'} `}>
            <div className="sidebar__top">
                <div className="sidebar__top-logo">
                    <Link to={'/'} className="sidebar__top-logo-link">
                        <img className="sidebar__top-image" src={sidebarLogo} alt="raap"/>
                    </Link>
                </div>
            </div>

            <div className="sidebar__user">
                <div className="sidebar__image-text-pair">
                    <img className="sidebar__user-image" src={userPicture} alt="raap user"/>
                    <p className="sidebar__user-text"> Shola Akinlade </p>
                </div>
            </div>

            <div className="sidebar__body">
                <div className="sidebar__container">
                    <ul className="sidebar__list-holder">
                        {sidebarLinks.map((el, index) => (
                            <React.Fragment key={index}>
                                <li className="sidebar__list" key={index}>
                                    <Link onClick={() => toggleSidebar(false)} to={el.link} className={`sidebar__link ${isActiveLink(el) && 'sidebar__link_active'}`}>
                                        <div className="sidebar__icon-text-pair">
                                            <span className="sidebar__icon"> <FontAwesomeIcon icon={el.icon} /> </span>
                                            <span className="sidebar__text"> {el.linkText} </span>
                                            { el.badge && <span className="sidebar__list-badge"> {el.badge} </span> }
                                        </div>
                                    </Link>
                                </li><hr className="sidebar__list-divider" />

                                {el.subLinks && (
                                    <ul className="sidebar__sub-list-holder">
                                        {el.subLinks.map((el, index) => (
                                            <li className="sidebar__sub-list" key={index}>
                                                <Link onClick={() => toggleSidebar(false)} to={el.link} className={`sidebar__sub-link ${isActiveLink(el) && 'sidebar__sub-link_active'} `}>
                                                    <p className="sidebar__sub-link-text"> {el.linkText} </p>
                                                </Link><hr className="sidebar__list-divider" />
                                            </li>
                                        ))}
                                    </ul>
                                )}

                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </div>
            
            <div className="sidebar__signout">
                <Link to={'/'} className="sidebar__link">
                    <div className="sidebar__icon-text-pair">
                        <span className="sidebar__icon sidebar__icon_footer"> <FontAwesomeIcon icon="sign-out-alt" /> </span>
                        <p className="sidebar__text"> Sign out </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar

import React from 'react'
import { Link } from 'react-router-dom'

const DesktopNavbar = ({path, location}) => {

    const settingsNavbar = () => {
        const settingsNavbarLinks = [
            {link: `${path}/settings/account-details`, linkText: 'Account Details' },
            {link: `${path}/settings/users`, linkText: 'Users' },
            {link: `${path}/settings/expense-categories`, linkText: 'Expense categories' }
        ];

        return (
            <React.Fragment>
                {settingsNavbarLinks.map((el, index) => 
                    <li className="desktop-navbar__list" key={index}>
                        <Link 
                            to={el.link} 
                            className={`desktop-navbar__link ${location.pathname === el.link && 'desktop-navbar__link_active'}`}
                        >
                            <p className="desktop-navbar__link-text"> {el.linkText} </p>
                        </Link>
                    </li>
                )}
            </React.Fragment>
        )
    }

    const beneficiariesNavbar = () => {
        return (
            <React.Fragment>
                <h3>beneficiaries</h3>
            </React.Fragment>
        )
    }

    const requestNavbar = () => {
        return (
            <React.Fragment>
                <h3>request</h3>
            </React.Fragment>
        )
    }

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

    const mapLocationToDesktopNavbar = [
        {
            link: `${path}/settings`, 
            subLinks:[ { link: 'account-details' }, { link: 'users' }, { link: 'expense-categories' } ], 
            navbar: settingsNavbar
        },
        {link: `${path}/beneficiaries`, navbar: beneficiariesNavbar},
        {link: `${path}/request`, navbar: requestNavbar}
    ];

    return (
        <div className="desktop-navbar">
            {mapLocationToDesktopNavbar.map((el, index) => (
                <React.Fragment key={index}>
                    { isActiveLink(el) && (
                        <ul className="desktop-navbar__list-holder">
                            {el.navbar()}
                        </ul>
                    )}
                </React.Fragment>
            ))} 
        </div>
    )
}

export default DesktopNavbar

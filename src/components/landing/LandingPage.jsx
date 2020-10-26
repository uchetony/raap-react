import React from 'react'
import WithTitle from '../../hoc/WithTitle';
import logo from '../../static/images/logo.png'
import { Link } from 'react-router-dom';
import Button from '../common.ui/button/Button';
import PageInfo from '../common.ui/page-info/PageInfo';

const LandingPage = (props) => {
    return (
        <div>
            <PageInfo>
                <div className="page-info page-info__position_absolute">
                    <img className="page-info__logo" src={logo} alt="raap logo"/>
                    <h1 className="page-info__text" >
                        Modern online and <br/> offline payments for <br/> Africa
                    </h1>
                    <p className="page-info__sub-text">
                        Raap helps businesses in Africa get paid by anyone, anywhere in the world,
                        powered by Paystack + Stripe
                    </p>
                    <Link to={'/dashboard'} className="page-info__link" >
                        <Button text='View Dashboard' btnModifiers="button_theme_primary"/>
                    </Link>
                </div>
            </PageInfo>
        </div>
    )
}

export default WithTitle({component: LandingPage, title: 'welcome'})

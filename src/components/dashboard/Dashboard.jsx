import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import './Dashboard.scss';
import Navbar from './components/navbar/Navbar';
import AccountDetails from './components/settings/AccountDetails';
import Sidebar from './components/sidebar/Sidebar';
import ComingSoon from '../common.ui/components/coming-soon/ComingSoon';

const Dashboard = ({match, location}) => {
    const { path } = match;
    const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);

    const comingSoonPaths = [
        `${path}/request`, `${path}/beneficiaries`, `${path}/settings/users`,
        `${path}/settings/expense-categories`
    ]

    const toggleSidebar = (value) => {
        setIsOpenSidebar(value);
    }

    return (
        <div className="dashboard-wrapper">
            <aside className="aside">
                <Sidebar path={path} location={location} isOpenSidebar={isOpenSidebar} toggleSidebar={toggleSidebar} />
            </aside>

            <main className="main">
                <Navbar path={path} location={location} toggleSidebar={toggleSidebar} isOpenSidebar={isOpenSidebar} />
                <div className="content">
                    <Switch>
                        <Route exact path={path} render={() => <Redirect to={`${path}/settings/account-details`} /> } />
                        <Route exact path={`${path}/settings/account-details`} render={(props) => <AccountDetails {...props} />} />
                        <Route exact path={`${comingSoonPaths[comingSoonPaths.indexOf(location.pathname)]}`} render={() =>  <ComingSoon /> } />
                    </Switch>
                </div>
            </main>
        </div>
    )
}

export default Dashboard

import React from 'react'
import WithTitle from '../../hoc/WithTitle'

const LandingPage = (props) => {
    return (
        <div>
            This is the landing page
        </div>
    )
}

export default WithTitle({component: LandingPage, title: 'welcome'})

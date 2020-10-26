import React from 'react'
import PageInfo from '../page-info/PageInfo'
import WithTitle from '../../../hoc/WithTitle'

const ComingSoon = () => {
    return (
        <div>
            <PageInfo>
                <div className="page-info">
                    <h1 className="page-info__text page-info__text_center">
                        Coming soon!
                    </h1>
                </div>
            </PageInfo>
        </div>
    )
}

export default WithTitle({component: ComingSoon, title: 'coming soon'})

import React from 'react'
import PageInfo from '../common.ui/page-info/PageInfo'

const PageNotFound = () => {
    return (
        <div style={{position: 'absolute', left: '0', top: '0', height: '100%', width: '100%', zIndex: 100  }} >
            <PageInfo>
                <div className="page-info">
                    <h1 className="page-info__text page-info__text_center">
                        Page Not Found!
                    </h1>
                </div>
            </PageInfo>
        </div>
    )
}

export default PageNotFound

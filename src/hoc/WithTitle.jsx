import React from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'

const APP_NAME = 'raap';

const TItleComponent = ({title}) => {
    const [dynamicTitle, setDynamicTitle] = React.useState('');

    React.useEffect(() => {
        setDynamicTitle(title);
    }, [title])

    return (
        <HelmetProvider>
            <Helmet>
                <title>
                    { title ? `${APP_NAME} | ${dynamicTitle}` : APP_NAME }
                </title>
            </Helmet>
        </HelmetProvider>
    )
}

const WithTitle = ({component: Component, title}) => props => {
    return (
        <React.Fragment>
            <TItleComponent title={title} />
            <Component {...props} />
        </React.Fragment>
    )
}

export default WithTitle

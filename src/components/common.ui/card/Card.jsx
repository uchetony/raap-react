import React from 'react'
import './Card.scss'

const Card = (props) => {
    const { cardHeader } = props;

    return (
        <div className="card">
            { cardHeader && (
                <div className="card__top">
                    <h2 className="card__header" > {cardHeader} </h2>
                </div>
            )}

            <div className="card__body">
                {props.children}
            </div>
        </div>
    )
}

export default Card

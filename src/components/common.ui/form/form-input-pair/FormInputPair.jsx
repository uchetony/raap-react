import React from 'react'

const FormInputPair = (props) => {

    const { screenSize } = props;

    return (
        <div className={`form__input_${screenSize}-screen-pair`}>
            {props.children}
        </div>
    )
}

export default FormInputPair

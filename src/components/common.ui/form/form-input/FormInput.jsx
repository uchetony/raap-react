import React from 'react'

const FormInput = (props) => {

    const { type, label, required, handleInputChange, value, name } = props;

    return (
        <div className="form__group">
            <label>
                <input 
                    className="form__input" type={type} 
                    placeholder={label} required={required} 
                    onChange={handleInputChange} value={value}
                    name={name}
                />
            </label>
        </div>
    )
}

export default FormInput

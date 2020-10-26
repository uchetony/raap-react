import React from 'react'

const FormSection = (props) => {

    const { formSectionHeader } = props;

    return (
        <div className="form__section">
            {formSectionHeader && (
                <div className="form__section-top">
                    <h2 className="form__section-header" > {formSectionHeader} </h2>
                </div>
            )}

            {props.children}
        </div>
    )
}

export default FormSection

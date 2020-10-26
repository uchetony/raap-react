import React from 'react'
import './Form.scss'

const Form = (props) => {
    const { formName, submitForm, children: childComponent } = props;
    return (
        <form className="form" onSubmit={(e) => {submitForm(e, formName)}}>
            {childComponent}
        </form>
    )
}

export default Form

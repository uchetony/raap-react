import React from 'react'
import WithTitle from '../../../../hoc/WithTitle'
import Section from '../../../common.ui/section/Section'
import Card from '../../../common.ui/card/Card'
import Form from '../../../common.ui/form/Form'
import FormInput from '../../../common.ui/form/form-input/FormInput'
import Button from '../../../common.ui/button/Button'
import FormSection from '../../../common.ui/form/form-section/FormSection'
import FormInputPair from '../../../common.ui/form/form-input-pair/FormInputPair'
import SectionElement from '../../../common.ui/section/section-element/SectionElement'
import SuccessPopup from '../../../common.ui/success-popup/SuccessPopup'
import Upload from '../../../common.ui/upload/Upload'


const INITIAL_STATE = {
    accountForm: {
        firstName: { value: '', required: true },
        lastName: { value: '', required: true },
        email: { value: '', required: true },
        phoneNumber: { value: '', required: true },
        password: { value: '', required: true },
        confirmPassword: { value: '', required: true },
        isSubmitting: false
    },
    uploadForm: {
        isSubmitting: false
    }
}

const AccountDetails = () => {

    const [accountState, setAccountState] = React.useState({...INITIAL_STATE});

    const [isOpenPopup, setIsOpenPopup] = React.useState(false)

    const { accountForm: aF, uploadForm: uF } = accountState;

    const submitForm = (e, formName) => {
        e.preventDefault();
        setAccountState({
            ...accountState,
            [formName]: {
                ...accountState[formName],
                isSubmitting: true
            }
        })

        setTimeout(() => {
            setAccountState({...INITIAL_STATE});
            setIsOpenPopup(true)
        }, 3000)
    }

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setAccountState({
            accountForm: {
                ...accountState.accountForm,
                [name]: { value, required: true }
            }
        })
    }

    const closePopup = value => {
        setIsOpenPopup(value);
    }

    return (
        <Section sectionHeader="Account Details">
            <SuccessPopup isOpenPopup={isOpenPopup} closePopup={closePopup} />
            <SectionElement>
                <Card cardHeader="Account Information" >
                    <Form submitForm={submitForm} formName="accountForm" >
                        <FormSection formSectionHeader="General">

                            <FormInputPair screenSize="big">
                                <FormInput 
                                    type="text" label="First Name" 
                                    required={aF.firstName.required} value={aF.firstName.value} 
                                    name="firstName" handleInputChange={handleInputChange} />
                                <FormInput 
                                    type="text" label="Last Name" 
                                    required={aF.lastName.required} value={aF.lastName.value} 
                                    name="lastName" handleInputChange={handleInputChange} />
                            </FormInputPair>
                            
                            <FormInput 
                                type="email" label="Email Address" 
                                required={aF.email.required} value={aF.email.value}  
                                name="email" handleInputChange={handleInputChange} />
                            <FormInput 
                                type="tel" label="Phone Number" 
                                required={aF.phoneNumber} value={aF.phoneNumber.value} 
                                name="phoneNumber" handleInputChange={handleInputChange} />

                        </FormSection>

                        <FormSection formSectionHeader="Password">
                            
                            <FormInputPair screenSize="big">
                                <FormInput 
                                    type="password" label="New Password" 
                                    required={aF.password.required} value={aF.password.value} 
                                    name="password" handleInputChange={handleInputChange} />
                                <FormInput 
                                    type="password" label="Re-enter New Password" 
                                    required={aF.confirmPassword.required} value={aF.confirmPassword.value} 
                                    name="confirmPassword" handleInputChange={handleInputChange} />
                            </FormInputPair>

                        </FormSection>

                        <Button 
                            type="submit" 
                            text="Save Changes" 
                            submittingText="Saving"
                            isSubmitting={aF.isSubmitting}
                            btnModifiers="button_theme_primary button_border button_width_half" 
                        />
                    </Form>
                </Card>
            </SectionElement>

            <SectionElement>
                <Card cardHeader="Profile Photo" >
                    <Upload
                        altPicText="SA"
                        instruction="Must be at least 128px by 128px and smaller than 512KB. Image will be displayed on Paystack in the same scale as above."
                    >
                        <Form submitForm={submitForm} formName="uploadForm">
                            <Button 
                                type="submit" 
                                text="Upload Photo" 
                                submittingText="Uploading"
                                isSubmitting={uF.isSubmitting}
                                btnModifiers="button_theme_primary button_border button_width_half button_position_center" 
                            />
                        </Form>
                    </Upload>
                </Card>
            </SectionElement>
        </Section>
    )
}

export default WithTitle({component: AccountDetails, title: 'settings-account details'})

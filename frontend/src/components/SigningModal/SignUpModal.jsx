import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx"
import SignUpDetailsForm from './SignUpDetailsForm'
import SignUpEmailVerifSection from './SignUpEmailVerifSection'
import { sendOTP } from '../../api/axios'



export default function SignUpModal(props) {


    let [showEmailVerificationForm, setShowEmailVerificationForm] = useState(true)
    let [showDetailsForm, setShowDetailsForm] = useState(false)

    let [OTPRequestType, setOTPRequestType] = useState('sendOTP')
    let [showOTPFields, setShowOTPFields] = useState(false)

    let [email, setEmail] = useState('')
    

    return props.showSignupPopup ? (
        
        <div className='sign-modal' id='sign-up'>
            <div className='sign-modal-box' id='sign-up'>
                <div className='sign-modal-top' id='sign-up'>
                    <div className='sign-modal-top-left'>SIGN UP</div>
                    <div className='sign-modal-x-button' onClick={ () => {props.setShowSignUpPopUp(false)
                                                                            setShowOTPFields(false)
                                                                            sendOTP(email, 'aborted')
                                                                            setEmail('')
                                                                            setOTPRequestType('sendOTP')
                                                                            setShowDetailsForm(false)
                                                                            setShowEmailVerificationForm(true)
                                                                            }}>
                        <RxCross2 />
                    </div>
                </div>
                <div className='sign-modal-body' id='sign-up'>
                    <div style={{fontSize:"27px", padding:"10px 0px 30px 0px", fontWeight:"normal"}}>Become a LITERATI Now!</div>
                    {
                        (showEmailVerificationForm) ? (
                            <SignUpEmailVerifSection 
                                    setShowEmailVerificationForm = {setShowEmailVerificationForm}
                                    setShowDetailsForm = {setShowDetailsForm}
                                    setEmail = {setEmail}
                                    OTPRequestType = {OTPRequestType}
                                    setOTPRequestType = {setOTPRequestType}
                                    showOTPFields = {showOTPFields}
                                    setShowOTPFields = {setShowOTPFields} />
                        ) : null
                    }

                    {
                        (showDetailsForm) ? (
                            <SignUpDetailsForm 
                                    email={email}
                                    setEmail={setEmail}
                                    setShowDetailsForm={setShowDetailsForm} />
                        ) : null
                    }

                </div>
            </div>
        </div>
    ):null;
}

import React, { useState, useEffect } from 'react'
import {sendOTP, verifyOTP} from '../../api/axios'
import { RxReload } from 'react-icons/rx'


function emailVerifFunction (setShowOTPFields, OTPRequestType, setOTPRequestType, setEmailVerifErrorMsg, setDisabledEmailInput, setEmail) {
    
    let email = document.getElementById('emailInput').value

    if (email.includes('@iitj.ac.in')) {
        console.log(2222222)

        setEmail(email)
        setEmailVerifErrorMsg('Processing... Please Wait!')

        sendOTP(email, OTPRequestType)
        .then((response) => {
            setShowOTPFields(true)
            setDisabledEmailInput(true)
            setOTPRequestType('resendOTP')
            // console.log(response)
            setEmailVerifErrorMsg(response)
        })
        .catch((error) => {
            setEmailVerifErrorMsg(error.response.data)
        })

        console.log(11111)
    } 
    else {
        if (email == '') {
            setEmailVerifErrorMsg('Please enter an email address first!')
        }
        else{
            setEmailVerifErrorMsg('Only IITJ email can be used to register!')
        }
    }    
}


function emailReset (setDisabledEmailInput, setShowOTPFields, setOTPRequestType, setEmailVerifErrorMsg, setEmail) {
    let email = document.getElementById('emailInput').value

    // console.log(222222222222)

    setEmailVerifErrorMsg('Processing...')

    sendOTP(email, 'aborted')
    .then((respone) => {setEmailVerifErrorMsg('')})

    document.getElementById('emailInput').value = ''
    setDisabledEmailInput(false)
    setShowOTPFields(false)
    setOTPRequestType('sendOTP')
    setEmail('')
}


function otpVerification (setEmailVerifErrorMsg, setEmail, setShowEmailVerificationForm, setShowDetailsForm, setOTPRequestType) {
    let email = document.getElementById('emailInput').value
    let otp = document.getElementById('otpInput').value

    if (otp == '') {
        setEmailVerifErrorMsg('Please enter an OTP')
    }
    else {
        setEmailVerifErrorMsg('Processing...')
        
        verifyOTP(email, otp)
        .then((response) => {
            setEmail(email)
            setEmailVerifErrorMsg('VERIFIED... Opening Details Form')
            setTimeout(() => {}, 2000);
            setShowEmailVerificationForm(false)
            setShowDetailsForm(true)
            setOTPRequestType('sendOTP')
        })
        .catch((error) => {
            setEmailVerifErrorMsg(error.response.data)
        })
    }
}


export default function SignUpEmailVerifSection(props) {

    let OTPRequestType = props.OTPRequestType
    let setOTPRequestType = props.setOTPRequestType
    let showOTPFields = props.showOTPFields
    let setShowOTPFields = props.setShowOTPFields

    let [emailVerifErrorMessage, setEmailVerifErrorMsg] = useState('')


    // let [showResetButton, setShowResetButton] = useState(false)

    let [disabledEmailInput, setDisabledEmailInput] = useState(false)


    return (
        <section className='signup-form-container'>
            <div className='signup-form'>
                <div className='signup-form-input-container'>
                    <div className='input-container'>    
                        <span className='input-container fixed-label'>Email Address</span>
                        <div className='signup-form-email-field-row'>
                            <input disabled={disabledEmailInput} className='input-label' name='username' id='emailInput'/>

                            {
                                (showOTPFields) ? (
                                    <div className='sign-modal-email-reload-button' onClick={() => emailReset(setDisabledEmailInput, setShowOTPFields, setOTPRequestType, setEmailVerifErrorMsg, props.setEmail)}>
                                        <RxReload />
                                    </div>
                                ) : null
                            }

                        </div>
                    </div>

                    {
                        (showOTPFields) ? (
                            <div className='input-container' id='email'>
                                <span className='input-container fixed-label'>Enter OTP</span>
                                <input className='input-label' name='email' id='otpInput'/>
                            </div>
                        ) : null
                    }
                        

                </div>
            </div>

            <br />

            <div className='sign-modal-error-msg'>
                { emailVerifErrorMessage ? ('*' + emailVerifErrorMessage) : null }
            </div>

            <br />

            <div className='signup-form-verification-button-row'>
                <button className='sign-modal-button' onClick={()=>{
                                                        emailVerifFunction(setShowOTPFields, OTPRequestType, setOTPRequestType, setEmailVerifErrorMsg, setDisabledEmailInput, props.setEmail)}}>
                    {(OTPRequestType=='sendOTP') ? 'Send OTP' : 'Resend OTP'}
                </button>
                        
                {
                    (showOTPFields) ? (

                        <button className='sign-modal-button' onClick={()=> {otpVerification(setEmailVerifErrorMsg, props.setEmail, props.setShowEmailVerificationForm, props.setShowDetailsForm, setOTPRequestType)} }>
                            Verify OTP
                        </button>

                    ) : null
                }

            </div>
        </section>
    )
}

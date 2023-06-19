import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx"
import {sendOTP, signup} from '../../api/axios'


function signupFunction(setErrorMessage, setShowSignInPopUp) {

    let firstname = document.getElementById('firstName').value
    let lastname = document.getElementById('lastName').value
    let rollnumber = document.getElementById('rollNumber').value
    let phonenumber = document.getElementById('phoneNumber').value
    let username = document.getElementById('userName').value
    // let email = document.getElementById('emailInput').value
    let password = document.getElementById('password').value
    let cnfrmpwd = document.getElementById('cnfrmPwd').value

    if(email == '' || password == '') {
        setErrorMessage('Please enter all the fields')
        return
    }
    else {
        setErrorMessage('')
    }

    signup(firstname, lastname, rollnumber, phonenumber, username, email, password, cnfrmpwd)
    .then((response) => {
        // console.log(response)
        // console.log(response.token.access)
        storeToken(response.token)
        setShowSignInPopUp(false)
    })
    .catch((error) => {
        // console.log('error')
        // console.log(error.response.data)
        let errorMsg = error.response.data
        setErrorMessage(JSON.stringify(errorMsg))
    })

    // console.log('login returned')
    // console.log()
}

function emailVerifFunction (setShowOTPFields, OTPRequestType, setOTPRequestType, setEmailVerifErrorMsg) {
    let email = document.getElementById('emailInput').value

    if (email.includes('@iitj.ac.in')) {
        console.log(2222222)

        sendOTP(email, OTPRequestType)
        .then((response) => {
            setShowOTPFields(true)
            setOTPRequestType('resendOTP')
            // console.log(response)
            setEmailVerifErrorMsg('Please enter the OTP sent on your email address.')
        })

        console.log(11111)
    } 
    else {
        setEmailVerifErrorMsg('Please enter a valid E-mail Address')
    }    
}


export default function SignUpModal(props) {

    let [errorMessage, setErrorMessage] = useState('')

    let [showDetailsForm, setShowDetailsForm] = useState(false)
    let [showEmailVerificationForm, setShowEmailVerificationForm] = useState(true)
    let [emailVerifErrorMessage, setEmailVerifErrorMsg] = useState('')
    let [OTPRequestType, setOTPRequestType] = useState('resendOTP')
    let [showOTPFields, setShowOTPFields] = useState(false)

    return props.showSignupPopup ? (
        
        <div className='sign-modal' id='sign-up'>
            <div className='sign-modal-box' id='sign-up'>
                <div className='sign-modal-top' id='sign-up'>
                    <div className='sign-modal-top-left'>SIGN UP</div>
                    <div className='sign-modal-x-button' onClick={ () => {props.setShowSignUpPopUp(false)
                                                                            setShowOTPFields(false)}}>
                        <RxCross2 />
                    </div>
                </div>
                <div className='sign-modal-body' id='sign-up'>
                    <div style={{fontSize:"27px", padding:"10px 0px 30px 0px", fontWeight:"normal"}}>Become a LITERATI Now!</div>
                    {
                        (showEmailVerificationForm) ? (
                            <section className='signup-form-container'>
                                    <div className='signup-form'>
                                        <div className='signup-form-input-container'>
                            
                                                <div className='input-container'>    
                                                    <span className='input-container fixed-label'>Email Address</span>
                                                    <input className='input-label' name='username' id='emailInput'/>
                                                </div>

                                                {
                                                    (showOTPFields) ? (
                                                        <div className='input-container' id='email'>
                                                            <span className='input-container fixed-label'>Enter OTP</span>
                                                            <input type="email" className='input-label' name='email' id='emailInput'/>
                                                        </div>
                                                    ) : null
                                                }
                                                

                                        </div>
                                    </div>

                                    <div className='sign-modal-error-msg'>
                                        { emailVerifErrorMessage ? ('*' + emailVerifErrorMessage) : null }
                                    </div>
                                    
                                    <br />
                                    <div className='signup-form-verification-button-row'>
                                        <button className='sign-modal-button' onClick={()=>{emailVerifFunction(setShowOTPFields, OTPRequestType, setOTPRequestType, setEmailVerifErrorMsg)}}>
                                            {(OTPRequestType=='sendOTP') ? 'SendOTP' : 'Resend OTP'}
                                        </button>
                                                
                                        {
                                            (showOTPFields) ? (
                                                <button className='sign-modal-button' onClick={()=>{signupFunction(setErrorMessage, props.setShowSignUpPopUp)}}>Verify OTP</button>
                                            ) : null
                                        }

                                    </div>
                                </section>
                        ) : null
                    }

                    {
                            (showDetailsForm) ? (
                                <section className='signup-form-container'>
                                    <div className='signup-form'>

                                        <div className='signup-form-input-container' id='personal-info'>  
                                            <div className='signup-form-field-row'>
                                                <div className='input-container' id='first-name'>
                                                    <div className='input-container fixed-label'>First Name</div>
                                                    <input className='input-label' name='firstname' id='firstName'/>
                                                </div>

                                                <div className='input-container' id='last-name'>
                                                    <div className='input-container fixed-label'>Last Name</div>
                                                    <input className='input-label' name='lastname' id='lastName'/>
                                                </div>
                                            </div>

                                            <div className='signup-form-field-row'>
                                                <div className='input-container' id='last-name'>
                                                    <div className='input-container fixed-label'>Roll Number</div>
                                                    <input className='input-label' name='rollnumber' id='rollNumber'/>
                                                </div>
                
                                                <div className='input-container' id='last-name'>
                                                    <div className='input-container fixed-label'>Phone Number</div>
                                                    <input className='input-label' name='phonenumber' id='phoneNumber'/>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className='signup-form-input-container'>
                                            <div className='signup-form-field-row'>
                                                <div className='input-container' id='email'>    
                                                    <span className='input-container fixed-label'>Username</span>
                                                    <input className='input-label' name='username' id='userName'/>
                                                </div>
                
                                                {/* <div className='input-container' id='email'>
                                                    <span className='input-container fixed-label'>Email Address</span>
                                                    <input type="email" className='input-label' name='email' id='emailInput'/>
                                                </div> */}
                                            </div>

                                            <div className='signup-form-field-row'>
                                                <div className='input-container'>
                                                    <span className='input-container fixed-label'>Password</span>
                                                    <input type="password" className='input-label' name='password' id='password'/>
                                                </div>
                
                                                <div className='input-container'>
                                                    <span className='input-container fixed-label'>Confirm Password</span>
                                                    <input type="password" className='input-label' name='cnfrmpwd' id='cnfrmPwd'/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='sign-modal-error-msg'>
                                        { errorMessage? ('*' + errorMessage): null }
                                    </div>
                                    
                                    <br />
                                    <button className='sign-modal-button' onClick={()=>{signupFunction(setErrorMessage, props.setShowSignUpPopUp)}}>Lit Me Up</button>
                                </section>
                            ) : null
                        }

                    
                </div>
                
            </div>
        </div>
    ):null;
}

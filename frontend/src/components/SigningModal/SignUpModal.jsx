import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx"
import {signup} from '../../api/axios'


function signupFunction(setErrorMessage, setShowSignInPopUp) {

    let firstname = document.getElementById('firstName').value
    let lastname = document.getElementById('lastName').value
    let rollnumber = document.getElementById('rollNumber').value
    let phonenumber = document.getElementById('phoneNumber').value
    let username = document.getElementById('userName').value
    let email = document.getElementById('emailInput').value
    let password = document.getElementById('password').value
    let cnfrmpwd = document.getElementById('cnfrmPwd').value

    // console.log(password == '')
    // console.log(email, password)
    // let response = ''
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

    console.log('login returned')
    console.log()
}


export default function SignUpModal(props) {

    let [errorMessage, setErrorMessage] = useState('')

    // {console.log(props.showSignupPopup)}
    return props.showSignupPopup ? (
        
        <div className='sign-modal' id='sign-up'>
            <div className='sign-modal-box' id='sign-up'>
                <div className='sign-modal-top' id='sign-up'>
                    <div className='sign-modal-top-left'>SIGN UP</div>
                    <div className='sign-modal-x-button' onClick={()=>props.setShowSignUpPopUp(false)}>
                        <RxCross2 />
                    </div>
                </div>
                <div className='sign-modal-body' id='sign-up'>
                    <div style={{fontSize:"27px", padding:"10px 0px 30px 0px", fontWeight:"normal"}}>Become a LITERATI Now!</div>


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
                </div>
                
            </div>
        </div>
    ):null;
}

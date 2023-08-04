import React, { useState, useEffect } from 'react'
import { signup } from '../../api/axios'
import { storeToken } from '../../utilities/localStorage'


function signupFunction(setErrorMessage, setShowSignUpPopUp, emailInput, setEmail, setShowDetailsForm, setShowEmailVerificationForm) {

    let firstname = document.getElementById('firstName').value
    let lastname = document.getElementById('lastName').value
    let rollnumber = document.getElementById('rollNumber').value.toUpperCase()
    let phonenumber = document.getElementById('phoneNumber').value
    let username = document.getElementById('userName').value
    let email = emailInput
    let password = document.getElementById('password').value
    let cnfrmpwd = document.getElementById('cnfrmPwd').value

    if(firstname == '' || lastname == '' || rollnumber == '' || phonenumber == '' || username == '' || password == '' || cnfrmpwd == '') {
        setErrorMessage('Please fill all the fields')
        return
    }
    else {
        if (!['B', 'M', 'P', 'C', 'D'].includes(rollnumber.charAt(0))) {
            setErrorMessage('Invalid Roll Number')
            return
        }

        else {
            if (phonenumber.length != 10) {
                setErrorMessage('Invalid Phone Number')
                return
            }

            else {
                if ((password.length < 8) || (password.search(/[a-z]/i) < 0) || (password.search(/[0-9]/) < 0) || (password.search(/[!@#$%^&*]/) < 0)) {
                    window.alert('Please follow the password guidelines')
                    setErrorMessage('')
                    return
                }

                else {
                    if (password != cnfrmpwd) {
                        setErrorMessage('Confirm Password does not match.')
                        return
                    }
                    else{
                        setErrorMessage('Processing')
                        signup(firstname, lastname, rollnumber, phonenumber, username, email, password, cnfrmpwd)
                        .then((response) => {
                            // console.log(response)
                            // console.log(response.token.access)
                            console.log(1111111111111111, 'llllllllllllllllllll')
                            storeToken(response.token)
                            alert('Sign Up Successful')
                            setErrorMessage('')
                            // window.alert('Sign Up done vro')
                
                            // console.log(1111111111111111)
                
                
                            document.getElementById('firstName').value = ''
                            document.getElementById('lastName').value = ''
                            document.getElementById('rollNumber').value = ''
                            document.getElementById('phoneNumber').value = ''
                            document.getElementById('userName').value = ''
                            document.getElementById('emailInput').value = ''
                            document.getElementById('password').value = ''
                            document.getElementById('cnfrmPwd').value = ''
                            setEmail('')
                            setShowDetailsForm(false)
                            setShowEmailVerificationForm(true)
                            // console.log("I am dancinnggggggggggggggggggg")
                            setShowSignUpPopUp(false)
                            window.location.reload()
                
                        })
                        .catch((error) => {
                            // console.log('error')
                            // console.log(error.response.data)
                            // console.log(22222222, 'hhhhhhhhhhhhhhhhhhhhhhh')
                            // console.log(error)
                            // let errorMsg = error.response
                            // console.log(errorMsg)
                            // setErrorMessage(JSON.stringify(errorMsg))
                            // console.log(error.response.data.errors.username[0])
                            setErrorMessage(error.response.data.errors.username[0])
                        })
                    }   
                }
            }
        }
    }
    
    

    // console.log('login returned')
    // console.log()
}



export default function SignUpDetailsForm(props) {

    let email = props.email
    let [errorMessage, setErrorMessage] = useState('')


    return (
        <div className='signup-form-container'>
            <div className='signup-form'>

                <div className='signup-form-input-container' id='personal-info'>  
                    <div className='signup-form-field-row'>
                        <div className='input-container' id='first-name'>
                            <div className='input-container fixed-label'>First Name</div>
                            <input className='input-label-signup' name='firstname' id='firstName'/>
                        </div>

                        <div className='input-container' id='last-name'>
                            <div className='input-container fixed-label'>Last Name</div>
                            <input className='input-label-signup' name='lastname' id='lastName'/>
                        </div>
                    </div>

                    <div className='signup-form-field-row'>
                        <div className='input-container' id='last-name'>
                            <div className='input-container fixed-label'>Roll Number</div>
                            <input className='input-label-signup' name='rollnumber' id='rollNumber'/>
                        </div>

                        <div className='input-container' id='last-name'>
                            <div className='input-container fixed-label'>Phone Number</div>
                            <input type='number' className='input-label-signup' name='phonenumber' id='phoneNumber'/>
                        </div>
                    </div>
                </div>
                <br />
                <div className='signup-form-input-container'>
                    <div className='signup-form-field-row'>
                        <div className='input-container' id='email'>    
                            <span className='input-container fixed-label'>Username</span>
                            <input className='input-label-signup' name='username' id='userName'/>
                        </div>

                        <div className='input-container' id='email'>
                            <span className='input-container fixed-label'>Email Address</span>
                            <input type="email" disabled={true} value={email} className='input-label-signup' name='email' id='emailInput' style={{backgroundColor:'#f0f4fc', color:'black', borderColor:'white'}}/>
                        </div>
                    </div>

                    <div className='signup-form-field-row'>
                        <div className='input-container'>
                            <span className='input-container fixed-label'>Password</span>
                            <input type="password" className='input-label-signup' name='password' id='password'/>
                        </div>

                        <div className='input-container'>
                            <span className='input-container fixed-label'>Confirm Password</span>
                            <input type="password" className='input-label-signup' name='cnfrmpwd' id='cnfrmPwd'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sign-modal-error-msg'>
                { errorMessage ? ('*' + errorMessage): 
                <div>
                    1. At least 8 characters long <br /> 
                    2. Alphanumeric (at least 1 uppercase letter) <br />
                    3. At least 1 special character <br />
                    </div> }
            </div>
            
            <button className='sign-modal-button' onClick={() => 
                                                    {signupFunction(setErrorMessage, props.setShowSignUpPopUp, props.email, props.setEmail, props.setShowDetailsForm, props.setShowEmailVerificationForm)
                                                    }}>
                Lit Me Up
            </button>
        </div>
    )
}

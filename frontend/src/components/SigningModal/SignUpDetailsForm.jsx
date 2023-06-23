import React, { useState, useEffect } from 'react'
import { signup } from '../../api/axios'


function signupFunction(setErrorMessage, setShowSignUpPopUp, emailInput, setEmail, setShowDetailsForm) {

    let firstname = document.getElementById('firstName').value
    let lastname = document.getElementById('lastName').value
    let rollnumber = document.getElementById('rollNumber').value
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
                console.log(111111111111111111111)
                storeToken(response.token)
                alert('Sign Up Successful')

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
                setShowSignUpPopUp(false)

            })
            .catch((error) => {
                // console.log('error')
                // console.log(error.response.data)
                console.log(222222222222222222)
                let errorMsg = error.response.data
                setErrorMessage(JSON.stringify(errorMsg))
            })
        }
    }

    

    // console.log('login returned')
    // console.log()
}



export default function SignUpDetailsForm(props) {

    let email = props.email
    let [errorMessage, setErrorMessage] = useState('')


    return (
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

                        <div className='input-container' id='email'>
                            <span className='input-container fixed-label'>Email Address</span>
                            <input type="email" disabled={true} value={email} className='input-label' name='email' id='emailInput' style={{backgroundColor:'#f0f4fc', color:'black', borderColor:'white'}}/>
                        </div>
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

            <br />
            <div className='sign-modal-error-msg'>
                { errorMessage? ('*' + errorMessage): null }
            </div>
            
            <br />
            <button className='sign-modal-button' onClick={() => 
                                                    {signupFunction(setErrorMessage, props.setShowSignUpPopUp, props.email, props.setEmail, props.setShowDetailsForm)}}>
                Lit Me Up
            </button>
        </section>
    )
}

import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx"
import { login } from '../../api/axios'
import { storeToken } from '../../utilities/localStorage'

function loginFunction(setErrorMessage, setShowSignInPopUp) {

    let email = document.getElementById('emailInput').value
    let password = document.getElementById('passwordInput').value
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

    login(email, password)
    .then((response) => {
        // console.log(response.token.access)
        storeToken(response.token)
        window.location.reload()
        setShowSignInPopUp(false)
    })
    .catch((error) => {
        let errorMsg = error.response.data.errors.non_field_errors[0]
        setErrorMessage(errorMsg)
    })

    // console.log('login returned')
    // console.log()
}



export default function SignInModal(props) {

    let [errorMessage, setErrorMessage] = useState('')

    
    return props.showSigninPopup?(
        <div className='sign-modal' id='sign-in'>
            <div className='sign-modal-box' id='sign-in'>
                <div className='sign-modal-top' id='sign-in'>
                    <div className='sign-modal-top-left'>SIGN IN</div>
                    <div className='sign-modal-x-button' onClick={()=>props.setShowSignInPopUp(false)}>
                        <RxCross2 />
                    </div>
                </div>

                <div className='sign-modal-body' id='sign-in'>

                    <div className='sign-modal-body-top-msg'>
                        Welcome Literati!
                    </div>

                    <section className='signin-form-container'>
                        <div className='signin-form' id='signin-form'>
                            <div className='signin-form-input-container'>
                                <div className='input-container' id='email'>
                                    <span className='input-container fixed-label'>
                                        Email Address
                                    </span>
                                    <input type="email" className='input-label' name='email' id='emailInput'/>
                                </div>



                                <div className='input-container' id='password'>
                                    <span className='input-container fixed-label'>
                                        Password
                                    </span>
                                    <input type="password" className='input-label' name='password' id='passwordInput'/>
                                </div>
                                
                                <div className='sign-modal-error-msg'>
                                    { errorMessage? ('*' + errorMessage) : null }
                                </div>

                                <br />
                            </div>

                            <button className='sign-modal-button' onClick={() =>{loginFunction(setErrorMessage, props.setShowSignInPopUp)}}>
                            Login
                            </button>

                        </div>
                    </section>

                    <br />
                    <span>Not a literati yet?</span>
                    <button className='sign-modal-button' onClick={()=>[props.setShowSignInPopUp(false) ,props.setShowSignUpPopUp(true)]}>Sign Up Now</button>
                
                </div>
            </div>
        </div>
    ):null;
}

import React, { useState } from 'react'
import { login } from '../../api/axios'
import { storeToken } from '../../utilities/localStorage'

function loginFunction(setErrorMessage, setShowSignInPopUp) {

    let email = document.getElementById('emailInput').value
    let password = document.getElementById('passwordInput').value
    console.log(password == '')
    console.log(email, password)
    // let response = ''
    if(email == '' || password == '') {
        setErrorMessage('Kripya bakchodi na kare!')
        return
    }
    else {
        setErrorMessage('')
    }

    login(email, password)
    .then((response) => {
        console.log(response.token.access)
        storeToken(response.token)
        window.location.reload()
        setShowSignInPopUp(false)
    })
    .catch((error) => {
        let errorMsg = error.response.data.errors.non_field_errors[0]
        setErrorMessage(errorMsg)
    })

    console.log('login returned')
    console.log()
}



export default function SignInModal(props) {

    let [errorMessage, setErrorMessage] = useState('')

    
    return props.showSigninPopup?(
        <div className='sign-modal' id='sign-in'>
            <div className='sign-modal-box' id='sign-in'>
                <div className='sign-modal-top' id='sign-in'>
                    <div className='sign-modal-top-left'>SIGN IN</div>
                    <div className='sign-modal-top-right'>
                        <button onClick={()=>props.setShowSignInPopUp(false)}>X</button>
                    </div>
                </div>
                <div className='sign-modal-body' id='sign-in'>
                    <div style={{fontSize:"25px", padding:"10px 0px 30px 0px", fontWeight:"normal"}}>LOG IN TO YOUR ACCOUNT</div>

                    <section className='signin-form-container'>
                        <div className='signin-form' id='signin-form'>

                        {/* <form className='signin-form' action="get" id='signin-form'> */}
                            <div className='signin-form-input-container'>
                                <div className='input-container' id='email'>
                                    <span className='input-container-fixed-label'>Email Address</span>
                                    <br />
                                    <input placeholder='Email Address' type="email" className='input-label' name='email' id='emailInput'/>
                                </div>

                                <div className='input-container' id='password'>
                                    <span className='input-container-fixed-label'>Password</span>
                                    <br />
                                    <input placeholder='Password' type="password" className='input-label' name='password' id='passwordInput'/>
                                </div>
                                <div>{errorMessage}</div>
                                <br />
                                <button onClick={() =>{loginFunction(setErrorMessage, props.setShowSignInPopUp)}}> Login </button>
                            </div>
                        {/* </form> */}

                        </div>
                        
                    </section>

                    <br />
                    <span>Not a literati yet?</span>
                    <br />
                    <br />
                    <button onClick={()=>[props.setShowSignInPopUp(false) ,props.setShowSignUpPopUp(true)]}>Sign Up Now</button>
                
                    
                </div>
                
            </div>
        </div>
    ):null;
}

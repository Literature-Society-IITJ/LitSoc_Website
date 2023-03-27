import React, { useState } from 'react'

export default function SignInModal(props) {
    
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
                    <div style={{fontSize:"25px", padding:"10px 0px 30px 0px", fontSize:"25px", fontWeight:"normal"}}>LOG IN TO YOUR ACCOUNT</div>

                    <section className='signin-form-container'>
                        <form className='signin-form' action="get" id='signin-form'>
                            <div className='signin-form-input-container'>
                                <div className='input-container' id='email'>
                                    <span className='input-container-fixed-label'>Email Address</span>
                                    <br />
                                    <input placeholder='Email Address' type="email" className='input-label' name='email'/>
                                </div>

                                <div className='input-container' id='password'>
                                    <span className='input-container-fixed-label'>Password</span>
                                    <br />
                                    <input placeholder='Password' type="password" className='input-label' name='password'/>
                                </div>

                                <button type='submit' form='signin-form'> Login </button>
                            </div>
                        </form>
                        
                    </section>

                    <br />
                    <span>Not a literati yet?</span>
                    <br />
                    <button onClick={()=>[props.setShowSignInPopUp(false) ,props.setShowSignUpPopUp(true)]}>Sign Up Now</button>
                
                    
                </div>
                
            </div>
        </div>
    ):null;
}

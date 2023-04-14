import React from 'react'

export default function SignUpModal(props) {
    // {console.log(props.showSignupPopup)}
    return props.showSignupPopup?(
        
        <div className='sign-modal' id='sign-up'>
            <div className='sign-modal-box' id='sign-up'>
                <div className='sign-modal-top' id='sign-up'>
                    <div className='sign-modal-top-left'>SIGN UP</div>
                    <div className='sign-modal-top-right'>
                        <button onClick={()=>props.setShowSignUpPopUp(false)}>Xup</button>
                    </div>
                </div>
                <div className='sign-modal-body' id='sign-up'>
                    <div style={{fontSize:"25px", padding:"10px 0px 30px 0px", fontWeight:"normal"}}>Become a Literati Now</div>

                    <section className='signup-form-container'>
                        <form className='signup-form' action="get">
                            <div className='signup-form-input-container'>
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

                                <button> Sign Up </button>
                            </div>
                            <br />
                            {/* <span>Not a literati yet?</span>
                            <br />
                            <button onClick={()=>props.setShowSignUpPopUp(false)}>Sign Up Now</button> */}
                            
                        </form>
                    </section>
                </div>
                
            </div>
        </div>
    ):null;
}

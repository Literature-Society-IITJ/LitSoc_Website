import React from 'react'
import { RiLoginBoxLine } from 'react-icons/ri'

export default function LoginButton(props) {
    return (
        <div className="upper-bar-right" tabIndex={3}>
            <button type="button" className="login-button" id="litsoc-login" onClick={()=>props.setShowSignInPopUp(true)}>
                LOGIN
                {/* <RiLoginBoxLine /> */}
            </button>
        </div>
    )
}

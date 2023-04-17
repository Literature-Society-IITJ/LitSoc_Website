import React from 'react'
import Logo_IITJ from '../../media/images/Navbar/Logo_IITJ.gif'

export default function IITJLogo() {
  return (
    <div className='upper-bar-left' tabIndex={1}>
        <a className="upper-bar-iitj-logo" href="/profile">
            <div className="IITJ-Logo">
                <img id="ub-iitj-logo-img" src = {Logo_IITJ} alt="IITJ Logo" width="70px"></img>
            </div>
        </a>
    </div>
  )
}

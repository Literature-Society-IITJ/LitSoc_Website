import React from 'react'
import lit_logo from '../../media/images/Navbar/lit_logo.png'

export default function Logo() {
  return (
    <div className="upper-bar-center" tabIndex={2}>
        <a className="upper-bar-logo" href="/">
            <div className="Lit_Logo">
                <img id="ub-logo-img" src={lit_logo} alt="LitSoc Logo" width="80px"></img>
            </div>
        </a>
    </div>
  )
}

import React from 'react'
import LoginButton from './LoginButton'
import MainLogo from './MainLogo'
import IITJLogo from './IITJLogo'

export default function NavbarUpper(props) {
    return (
        <div className='Navbar-upper' tabIndex={1}>
            <IITJLogo />
            <MainLogo />
            <LoginButton {...props} />
        </div>
    )
}

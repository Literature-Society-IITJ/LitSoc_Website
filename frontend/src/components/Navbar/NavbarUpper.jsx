import React from 'react'
import LoginButton from './LoginButton'
import MainLogo from './MainLogo'
import IITJLogo from './IITJLogo'

export default function NavbarUpper() {
    return (
        <div className='Navbar-upper' tabIndex={1}>
            <IITJLogo />
            <MainLogo />
            <LoginButton />
        </div>
    )
}

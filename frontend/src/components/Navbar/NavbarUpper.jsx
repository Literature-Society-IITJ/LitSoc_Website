import React from 'react'
import LoginButton from './LoginButton'
import MainLogo from './MainLogo'
import IITJLogo from './IITJLogo'
import { tokenExists } from '../../utilities/localStorage'

export default function NavbarUpper(props) {
    return (
        <div className='Navbar-upper' tabIndex={1}>
            <IITJLogo />
            <MainLogo />
            { !tokenExists() && <LoginButton {...props} />}
            { tokenExists() && <div>Profile</div>}
        </div>
    )
}

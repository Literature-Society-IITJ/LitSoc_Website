import React from 'react'
import LoginButton from './LoginButton'
import MainLogo from './MainLogo'
import IITJLogo from './IITJLogo'
import { tokenExists } from '../../utilities/localStorage'
import ProfileButton from './ProfileButton'

export default function NavbarUpper(props) {
    return (
        <div className='navbar-upper' tabIndex={1}>
            <IITJLogo />
            <MainLogo />
            { !tokenExists() && <LoginButton {...props} />}
            { tokenExists() && <ProfileButton />}
        </div>
    )
}

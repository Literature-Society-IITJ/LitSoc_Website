import React from 'react'
import Login_button from './Nav_upper_right'
import Logo from './Nav_upper_center'
import IITJ_logo from './Nav_upper_left'

export default function Navbar_upper() {
    return (
        <div className='Navbar_upper' tabIndex={1}>
            <IITJ_logo />
            <Logo />
            <Login_button />
        </div>
    )
}

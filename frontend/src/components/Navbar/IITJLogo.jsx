import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function IITJLogo(props) {

    return (
        <div className='upper-bar-left' tabIndex={1}>
            <a className="upper-bar-iitj-logo" href="https://www.iitj.ac.in/" target='blank'>
                <div className="iitj-logo"></div>
            </a>
            <div>
                <RxHamburgerMenu className='upper-bar-hamburger-menu' onClick={() => {props.setShowSideBar(true)}}/>
            </div>
        </div>
    )
}

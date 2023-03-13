import React, {useState, useEffect} from 'react'
import NavbarUpper from './NavbarUpper'
import './Navbar.css'
import NavPanel from './NavPanel';
// import Nav_Club_dropdowns from './Nav_Club_drop';

const changeNavBarBG = () =>{
    var cursorposition = window.scrollY/7

    document.querySelectorAll(".nav-bar-main")[0].style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7)" + cursorposition + "%, rgba(16, 20, 27, 0))";
};

window.addEventListener('scroll', changeNavBarBG);

export default function Navbar() {

    return (
        <div className='nav-bar'>
            <div className='nav-bar-main' tabIndex={1}>
                <NavbarUpper />
                <NavPanel />
            </div>
        </div>
    )
}
    
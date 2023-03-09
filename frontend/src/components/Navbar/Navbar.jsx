import React, {useState, useEffect} from 'react'
import Navbar_upper from './Navbar_upper'
import './Navbar.css'
import Nav_panel from './Nav_panel';

const changeNavBarBG = () =>{
    var cursorposition = window.scrollY/8

    document.querySelectorAll(".nav-bar")[0].style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7)" + cursorposition + "%, rgba(16, 20, 27, 0))";

    // document.querySelectorAll(".Navbar_upper")[0].style.backgroundImage = "linear-gradient(180deg, rgb(0, 0, 0)" + cursorposition + "%, rgba(16, 20, 27, 0))";

    // document.querySelectorAll(".Nav_panel")[0].style.backgroundImage = "linear-gradient(180deg, rgb(0, 0, 0)" + (cursorposition-110) + "%, rgba(0, 0, 0, 0))";

};

window.addEventListener('scroll', changeNavBarBG);

export default function Navbar() {

    return (
        <div className={'nav-bar'}>
            <Navbar_upper />
            {/* <div className='Border'></div> */}
            <Nav_panel />
        </div>
    )
}
    
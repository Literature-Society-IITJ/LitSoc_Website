import React from 'react'
import './Fandom.css'

export default function StickyNav(){

    window.onscroll = function() {myFunction()};
    return(
        <div className='fandom-upper-bar-container'>
            <a className="fandom-upper-bar-logo" href='/'></a>
            <div className="fandom-nav">
                <a className="fandom-nav-element-first" href="#teams">TEAM</a>
                <a className="fandom-nav-element" href="/register">REGISTER</a>
                <a className="fandom-nav-element" href="#timeline">TIMELINE</a>
                <a className="fandom-nav-element-last" href="#gallery">GALLERY</a>
            </div>
        </div>
    )
}
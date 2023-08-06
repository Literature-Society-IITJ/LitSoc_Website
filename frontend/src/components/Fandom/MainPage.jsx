import React from 'react';
import './Fandom.css'
import './MainPage.css'
import otaconlogo from '../../media/fandom/otaconlogo.png'
// import touhou from '../../media/fandom/2hu.png'

// import { FandomData } from '../../data/fandom/FandomEvent'

export default function MainPage(){
    return(
        <>
            <div className='fandom-mainpage'>
                <div className='fandom-main-container'>
                    <div src={otaconlogo} alt='otaconlogo' className='fandom-mainpage-logo'></div>
                    <div className='fandom-front-text'>The LITERATURE SOCIETY is thrilled to invite you to OTACON, A week-long celebration of all things ANIME! 
                    Join us from August 8th to August 12th by registering below.</div>
                    <a className='otacon-register-here-button' href='https://docs.google.com/forms/d/e/1FAIpQLSfkKE7QipkFQTswAwyIHlw1y5uMuNJaG0Cnmg2Z4fwdtliTrQ/viewform?usp=sf_link' target='/'
                    >Register Here</a>
                </div>
            </div>
        </>
    )
};
import React from 'react'
import StickyNav from '../components/Fandom/StickyNav'
import MainPage from '../components/Fandom/MainPage'
import Timeline from '../components/Fandom/Timeline'
import Gallery from '../components/Fandom/Gallery'
import Team from '../components/Fandom/Team'
import OtaConEvents from '../components/Fandom/OtaConEvents'
import '../components/Fandom/Fandom.css'
import '../components/Fandom/Timeline.css'
import '../components/Fandom/StickyNav.css'


export default function Fandom() {
    return (
        <>
            <div className='fandom-main'>
                <MainPage />
                <Timeline />
                {/* <OtaConEvents /> */}
                <Team />
            </div>
            {/* <StickyNav/> */}
            <a className="fandom-upper-bar-logo" href='/'></a>
        </>
    )
}
import React from 'react'
import { GeneralTopData } from '../data/GeneralTopData'
import BottomBar from '../components/BottomBar/BottomBar'
import Navbar from '../components/Navbar/Navbar'
import '../components/Teams/Teams.css'
import GeneralTop from '../components/GeneralTop'

export default function Team() {

    let item = GeneralTopData.Team
    let imgsrc = item.imgsrc

    return (
        <>
            <div className='teams-main' style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0)), url(${imgsrc})`}}>
                <GeneralTop item={item} />
                {/* <HomeMiddle /> */}
                <BottomBar />
            </div>
            <Navbar />
        </>
    )
}

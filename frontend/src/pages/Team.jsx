import React from 'react'
import { GeneralTopData } from '../data/GeneralTopData'
import BottomBar from '../components/BottomBar/BottomBar'
import Navbar from '../components/Navbar/Navbar'
import '../components/Teams/Teams.css'
import GeneralTop from '../components/GeneralTop'
import TeamMain from '../components/Teams/TeamMain'

export default function Team() {

    let item = GeneralTopData.Team

    return (
        <>
            <div className='teams-main'>
                <GeneralTop item={item} />
                <TeamMain />
                {/* <HomeMiddle /> */}
                <BottomBar />
            </div>
            <Navbar />
        </>
    )
}

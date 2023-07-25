import React, { useState } from 'react'
import { GeneralTopData } from '../data/GeneralTopData'
import BottomBar from '../components/BottomBar/BottomBar'
import Navbar from '../components/Navbar/Navbar'
import '../components/Teams/Teams.css'
import GeneralTop from '../components/GeneralTop'
import TeamMain from '../components/Teams/TeamMain'

export default function Team() {

    let item = GeneralTopData.Team
    let [taglineDisplay, setTaglineDisplay] = React.useState('Meet the Team')
    item.tagline = taglineDisplay

    return (
        <>
            <div className='teams-main'>
                <GeneralTop item={item} />
                <TeamMain setTaglineDisplay={setTaglineDisplay}/>
                <BottomBar/>
            </div>
            <Navbar />
        </>
    )
}

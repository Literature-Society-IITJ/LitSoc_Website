import React from 'react'
import { GeneralTopData } from '../../data/GeneralTopData'
import Navbar from '../../components/Navbar/Navbar'
import BottomBar from '../../components/BottomBar/BottomBar'
import GeneralTop from '../../components/GeneralTop'
import '../../components/Clubs/Clubs.css'
import OratoryclubMain from '../../components/Clubs/OratoryclubMain'

export default function OratoryClub() {

    let item = GeneralTopData.OratoryClub

    return (
        <>
            <div className='club-main' id='oratory-club'>
                <GeneralTop item={item} />
                <OratoryclubMain />
                <BottomBar />
            </div>
            <Navbar />
        </>
    )
}

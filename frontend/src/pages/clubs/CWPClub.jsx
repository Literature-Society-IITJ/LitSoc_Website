import React from 'react'
import { GeneralTopData } from '../../data/GeneralTopData'
import Navbar from '../../components/Navbar/Navbar'
import BottomBar from '../../components/BottomBar/BottomBar'
import GeneralTop from '../../components/GeneralTop'
import '../../components/Clubs/Clubs.css'
import CWPclubMain from '../../components/Clubs/CWPclubMain'

export default function CWPClub() {

    let item = GeneralTopData.CWPClub
    let imgsrc = item.imgsrc

    return (
        <>
            <div className='club-main' style={{backgroundImage: `url(${imgsrc})`}}>
                <GeneralTop item={item} />
                <CWPclubMain />
                <BottomBar />
            </div>
            <Navbar />
        </>
    )
}

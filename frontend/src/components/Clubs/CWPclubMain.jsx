import React from 'react'
import { ClubsData } from '../../data/Clubs'
import ClubsTop from './ClubsTop'
import './Clubs.css'
import BottomBar from '../BottomBar/BottomBar'
import HomeMiddle from '../HomePage/HomeMiddle'

export default function CWPclubMain() {
    
    let clubdata = ClubsData.CWPClub

    return (
        <div className='club-main' id={clubdata.id}>
            <ClubsTop id={clubdata.id} clubname={clubdata.clubname} quote={clubdata.quote} imgsrc={clubdata.imgsrc} />
            
            <HomeMiddle />
            <BottomBar />
        </div>
    )
}
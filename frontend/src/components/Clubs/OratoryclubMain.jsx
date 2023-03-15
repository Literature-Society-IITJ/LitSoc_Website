import React from 'react'
import { ClubsData } from '../../data/Clubs'
import ClubsTop from './ClubsTop'
import './Clubs.css'
import BottomBar from '../BottomBar/BottomBar'

export default function OratoryclubMain() {

    let clubdata = ClubsData.OratoryClub

    return (
        <div className='club-main' id={clubdata.id}>
            <ClubsTop id={clubdata.id} clubname={clubdata.clubname} quote={clubdata.quote} imgsrc={clubdata.imgsrc} />
            
            <BottomBar />
        </div>
    )
}

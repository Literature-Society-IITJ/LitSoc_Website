import React from 'react'
import { ClubsData } from '../../data/Clubs'
import ClubsTop from './ClubsTop'
import './Clubs.css'
import BottomBar from '../BottomBar/BottomBar'

export default function GoonjMain() {

    let clubdata = ClubsData.Goonj

    return (
        <div className='club-main' id={clubdata.id}>
            <ClubsTop id={clubdata.id} clubname={clubdata.clubname} quote={clubdata.quote} imgsrc={clubdata.imgsrc} />
            
            <BottomBar />
        </div>
    )
}
import React from 'react'
import { ClubsData } from '../../data/Clubs'
import ClubsTop from './ClubsTop'
import './Clubs.css'
import BottomBar from '../BottomBar/BottomBar'

export default function BookclubMain() {

    let clubdata = ClubsData.BookClub

    return (
        <>
            <div className='club-main' id={clubdata.id}>
                <ClubsTop id={clubdata.id} clubname={clubdata.clubname} quote={clubdata.quote} imgsrc={clubdata.imgsrc} tabindex={1}/>
                
                <BottomBar tabindex={2}/>
                
            </div>
        </>
    )
}

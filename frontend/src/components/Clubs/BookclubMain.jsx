import React from 'react'
import { ClubsData } from '../../data/Clubs'
import './Clubs.css'

export default function BookclubMain() {

    let clubdata = ClubsData.BookClub

    let imgsrc = clubdata.imgsrc
    let desc = clubdata.description
    let quote = clubdata.quote

    return (
        <div className='club-desc-quote-container'>
            <div className='club-description-container'>
                <div className='club-logo-container'>
                    <img className='club-logo' src={imgsrc} alt="logo" width='300px' height='auto'/>
                </div>
                <div className='club-description'>
                    {desc}
                </div>
            </div>
            <div className='club-desc-quote'>
                {quote}
            </div>
        </div>
    )
}

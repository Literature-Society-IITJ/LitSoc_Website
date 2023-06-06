import React from 'react'
import { ClubsData } from '../../data/Clubs'
import './Clubs.css'
import GeneralClubDesc from './GeneralClubDesc'

export default function BookclubMain() {

    let clubdata = ClubsData.BookClub

    let id = clubdata.id
    let logo = clubdata.imgsrc
    let desc = clubdata.description
    let quote = clubdata.quote

    return (
        <>
            <GeneralClubDesc id={id} logo={logo} desc={desc} quote={quote} />
        </>
    )
}

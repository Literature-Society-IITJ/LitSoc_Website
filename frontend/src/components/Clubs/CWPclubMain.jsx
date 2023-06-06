import React from 'react'
import { ClubsData } from '../../data/Clubs'
// import ClubsTop from './ClubsTop'
import GeneralClubDesc from './GeneralClubDesc'


export default function CWPclubMain() {
    
    let clubdata = ClubsData.CWPClub

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

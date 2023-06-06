import React from 'react'
import { ClubsData } from '../../data/Clubs'
// import ClubsTop from './ClubsTop'
import './Clubs.css'
import GeneralClubDesc from './GeneralClubDesc'


export default function GoonjMain() {

    let clubdata = ClubsData.Goonj

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

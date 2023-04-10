import React from 'react'
import { GeneralTopData } from '../../data/GeneralTopData'
import Navbar from '../../components/Navbar/Navbar'
import BottomBar from '../../components/BottomBar/BottomBar'
import GeneralTop from '../../components/GeneralTop'
import '../../components/Clubs/Clubs.css'
import BookclubMain from '../../components/Clubs/BookclubMain'

export default function BookClub() {

    let item = GeneralTopData.BookClub
    let imgsrc = item.imgsrc

    return (
        <>
            <div className='club-main' style={{backgroundImage: `url(${imgsrc})`}}>
                <GeneralTop item={item} />
                <BookclubMain />
                <BottomBar />
            </div>
            <Navbar />
        </>
    )
}

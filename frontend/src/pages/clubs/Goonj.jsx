import React from 'react'
import { GeneralTopData } from '../../data/GeneralTopData'
import Navbar from '../../components/Navbar/Navbar'
import BottomBar from '../../components/BottomBar/BottomBar'
import GeneralTop from '../../components/GeneralTop'
import '../../components/Clubs/Clubs.css'
import GoonjMain from '../../components/Clubs/GoonjMain'

export default function Goonj() {

    let item = GeneralTopData.Goonj
    let imgsrc = item.imgsrc

    return (
        <>
            <div className='club-main' style={{backgroundImage: `url(${imgsrc})`}}>
                <GeneralTop item={item} />
                <GoonjMain />
                <BottomBar />
            </div>
            <Navbar />
        </>
    )
}

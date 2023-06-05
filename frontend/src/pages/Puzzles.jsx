import React from 'react'
import { GeneralTopData } from '../data/GeneralTopData'
import BottomBar from '../components/BottomBar/BottomBar'
import Navbar from '../components/Navbar/Navbar'
import '../components/Puzzles/Puzzles.css'
import GeneralTop from '../components/GeneralTop'
import PuzzlesMain from '../components/Puzzles/PuzzlesMain'

export default function Puzzles() {
  
    let item = GeneralTopData.Puzzles
    let imgsrc = item.imgsrc

    return (
        <>
            <div className='puzzles-main' style={{backgroundImage: `url(${imgsrc})`}}>
                <GeneralTop item={item} />
                <PuzzlesMain />
                {/* <HomeMiddle /> */}
                <BottomBar />
            </div>
            <Navbar />
        </>
    )
}

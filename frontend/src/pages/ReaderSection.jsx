import React from 'react'
import { GeneralTopData } from '../data/GeneralTopData'
import BottomBar from '../components/BottomBar/BottomBar'
import Navbar from '../components/Navbar/Navbar'
import '../components/ReaderSection/ReaderSection.css'
import GeneralTop from '../components/GeneralTop'
import ReadSecMain from '../components/ReaderSection/ReadSecMain'

export default function ReaderSection() {
  
    let item = GeneralTopData.ReaderSection

    return (
        <>
            <div className='reader-sec-main'>
                <GeneralTop item={item} />
                <ReadSecMain />
                {/* <ItemCard /> */}
                {/* <HomeMiddle /> */}
                <BottomBar />
            </div>
            <Navbar />
        </>
    )
}

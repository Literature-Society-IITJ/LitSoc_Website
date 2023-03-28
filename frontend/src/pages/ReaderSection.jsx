import React from 'react'
import { GeneralTopData } from '../data/GeneralTopData'
import BottomBar from '../components/BottomBar/BottomBar'
import Navbar from '../components/Navbar/Navbar'
import '../components/ReaderSection/ReaderSection.css'
import GeneralTop from '../components/GeneralTop'
import ReadSecMain from '../components/ReaderSection/ReadSecMain'
import ItemCard from '../components/ReaderSection/ItemCard'

export default function ReaderSection() {
  
    let item = GeneralTopData.ReaderSection
    let imgsrc = item.imgsrc

    return (
        <>
            <div className='reader-sec-main' style={{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0)), url(${imgsrc})`}}>
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

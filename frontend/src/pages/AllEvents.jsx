import React from 'react'
import { GeneralTopData } from '../data/GeneralTopData'
import BottomBar from '../components/BottomBar/BottomBar'
import Navbar from '../components/Navbar/Navbar'
import '../components/Events/Events.css'
import GeneralTop from '../components/GeneralTop'

export default function AllEvents() {
  
    let item = GeneralTopData.AllEvents
    let imgsrc = item.imgsrc

    return (
        <>
            <div className='events-main' style={{backgroundImage: `url(${imgsrc})`}}>
                <GeneralTop item={item} />
                {/* <HomeMiddle /> */}
                <BottomBar />
            </div>
            <Navbar />
        </>
    )
}

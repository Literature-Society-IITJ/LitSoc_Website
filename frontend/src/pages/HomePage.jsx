import React from 'react'
import BottomBar from '../components/BottomBar/BottomBar'
import HomeMiddle from '../components/HomePage/HomeMiddle'
import HomeTop from '../components/HomePage/HomeTop'
import Navbar from '../components/Navbar/Navbar'
import '../components/HomePage/HomePage.css'

export default function HomePage() {
    return (
        <div className='home_main'>
            <HomeTop />
            <HomeMiddle />
            <Navbar />
            <BottomBar />
        </div>
    )
}

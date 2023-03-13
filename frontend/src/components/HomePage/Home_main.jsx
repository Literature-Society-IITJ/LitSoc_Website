import React from 'react'
import './Home_main.css'
import Navbar from '../Navbar/Navbar'
import Bottom_bar from '../BottomBar/BottomBar'
import Home_top from './HomeTop'
import Home_middle from './HomeMiddle'


export default function Home_main() {
  return (
    <div className='home_main'>
        <Home_top />
        <Home_middle />
        <Navbar />
        <Bottom_bar />
    </div>
  )
}

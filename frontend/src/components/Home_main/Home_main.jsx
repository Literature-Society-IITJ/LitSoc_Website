import React from 'react'
import './Home_main.css'
import Navbar from '../Navbar/Navbar'
import Bottom_bar from '../Bottom_bar/Bottom_bar'
import Home_top from './Home_top'
import Home_middle from './Home_middle'


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

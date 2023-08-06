import React from 'react'
import HomeFeatured from './HomeFeatured'
import HomeAllSecDesc from './HomeAllSecDesc'
import HomeSocDesc from './HomeSocDesc'
import HomeStarfield from './HomeStarfield'
import HomeFunData from './HomeFunData'


export default function Home() {
    return (
        <div className='home-main-inner'>
            <HomeStarfield />
            <HomeFeatured />
            <HomeSocDesc />
            <HomeFunData />
            <HomeAllSecDesc />
        </div>
    )
}

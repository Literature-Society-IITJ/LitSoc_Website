import React from 'react'
import HomeFeatured from './HomeFeatured'
import HomeAllSecDesc from './HomeAllSecDesc'
import HomeSocDesc from './HomeSocDesc'
import HomeStarfield from './HomeStarfield'
import HomeFunData from './HomeFunData'
import HomeLoadingAnimation from './HomeLoadingAnimation'


export default function Home() {
    return (
        <div className='home-main-inner'>
            {/* <HomeLoadingAnimation /> */}
            <HomeStarfield />
            <HomeFeatured />
            <HomeSocDesc />
            <HomeFunData />
            <HomeAllSecDesc />
        </div>
    )
}

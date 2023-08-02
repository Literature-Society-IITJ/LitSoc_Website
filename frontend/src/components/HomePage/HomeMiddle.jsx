import React from 'react'
import HomeFeatured from './HomeFeatured'
import HomeAllSecDesc from './HomeAllSecDesc'
import HomeSocDesc from './HomeSocDesc'
import HomeStarfield from './HomeStarfield'


export default function Home() {
    return (
        <div className='home-main-inner'>
            <HomeStarfield />
            <HomeFeatured />
            <HomeSocDesc />
            <HomeAllSecDesc />
        </div>
    )
}

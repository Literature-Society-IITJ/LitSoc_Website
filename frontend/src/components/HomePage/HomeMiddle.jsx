import React from 'react'
import HomeFeatured from './HomeFeatured'
import HomeAllSecDesc from './HomeAllSecDesc'
import HomeSocDesc from './HomeSocDesc'


export default function Home() {
    return (
        <div className='home-main-inner'>
            <HomeFeatured />
            <HomeSocDesc />
            <HomeAllSecDesc />
            
        </div>
    )
}

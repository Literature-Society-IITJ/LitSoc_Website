import React from 'react'
import SlidedownIndicator from '../SlidedownIndicator'
import { HomeFeaturedInfo } from '../../data/HomePageData'

export default function HomeFeatured() {
    return (
        <div className='home-featured-container'>
            <div className='home-featured-container-bg'></div>
            <div className='home-featured-content-container'>
                <div className='home-featured-title'>
                    {HomeFeaturedInfo.title}
                </div>
                <div className='home-featured-tagline'>
                    {HomeFeaturedInfo.tagline}
                </div>
                <div className='home-featured-description'>
                    {HomeFeaturedInfo.description}
                </div>
                <div className='home-featured-button-container'>
                    <button className='home-featured-button' onClick={() => {location.href = '#'}}>
                        {/* <div className='home-featured-button-text'> */}
                            {HomeFeaturedInfo.buttonText}
                        {/* </div> */}
                    </button>
                </div>

                <SlidedownIndicator />
            </div>
        </div>
    )
}

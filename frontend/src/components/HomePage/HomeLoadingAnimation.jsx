import React from 'react'
import  white_logo  from '../../media/images/white_logo.png'
import cwpc from '../../media/images/cwpc.jpg'

export default function HomeLoadingAnimation() {
    return (
        <div className='home-loading-animation'>
            <div className='home-loading-animation-inner'>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" className='wavies-svg'>
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="wavies">
                    <use xlinkHref="#gentle-wave" x="50" y="0" fill="#d5d5d5"/>
                    <use xlinkHref="#gentle-wave" x="50" y="0" fill="#e5e5e5"/>
                    <use xlinkHref="#gentle-wave" x="50" y="0" fill="white"/>  
                </g>
                </svg>
            </div>
        </div>
    )
}

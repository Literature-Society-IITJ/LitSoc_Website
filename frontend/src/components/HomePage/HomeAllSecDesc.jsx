import React from 'react'
import { HomeAllSecDescList } from '../../data/HomePageData'

export default function HomeAllSecDesc() {
    return (
        <div className='home-all-sections-desc'>
            {
                HomeAllSecDescList.map((item) => (
                    item.href.length ? (
                        <a href={item.href} className='home-all-desc-card' id = {item.id}>
                            <div className='home-all-desc-card-border'></div>
                            <div className='home-all-desc-card-title'>{item.title}</div>
                            <div className='home-all-sec-content-box-container'>
                                <div className='home-all-desc-45rotate-container'>
                                    <div className='home-all-desc-content-container'>{item.desc}</div>
                                </div>
                            </div>
                        </a>

                    ) : (
                        <div className='home-all-desc-card' id = {item.id}>
                            <div className='home-all-desc-card-border'></div>
                            <div className='home-all-desc-card-title'>{item.title}</div>
                            <div className='home-all-sec-content-box-container'>
                                <div className='home-all-desc-45rotate-container'>
                                    <div className='home-all-desc-content-container'>{item.desc}</div>
                                </div>
                            </div>
                        </div>

                    )
                ))
            }
        </div>
    )
}

import React from 'react'
import { useState } from 'react'
import ItemMain from './ItemMain'

export default function ItemCard(props) {

    let [showItem, setShowItem] = useState(false)


    let title = 'Oblivian'
    let img_src = '/src/media/images/bg4.jpg'
    let content = props.content
    let author = props.author

    return (
        <div className='reader-sec item-card'>
            <div className='reader-sec item-card-image-container'>
                <div className='reader-sec item-card-image-button' onClick={() =>setShowItem(true)}>
                    <img src={img_src} alt={title} className='reader-sec item-card-image' />
                </div>
                
                {/* <div className='reader-sec item-card-image-border'>
                </div> */}
            </div>
            <div className='reader-sec item-card-title'>{title}</div>

            <ItemMain showItem={showItem} setShowItem={setShowItem} content={props.content} author={props.author}/>
        </div>
    )
}

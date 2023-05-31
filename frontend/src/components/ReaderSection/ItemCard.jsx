import React from 'react'
import { useState } from 'react'
import ItemMain from './ItemMain'

export default function ItemCard(props) {

    let [showItem, setShowItem] = useState(false)


    let title = props.title
    let img_src = 'src/media/' + props.img
    let content = props.content
    let author = props.author

    return (
        <>
        <div className='reader-sec item-card' onClick={()=>setShowItem(true)}>
            <div className='reader-sec item-card-image-container'>
                <div className='reader-sec item-card-image' style={{backgroundImage: `url(${img_src})`}}>
                </div>
            </div>
            <div className='reader-sec item-card-content-container'>
                <div className='reader-sec item-card-title'>{title}</div>
                <div className='reader-sec item-card-author'>{author}</div>             
            </div>
        </div>
        <ItemMain showItem={showItem} setShowItem={setShowItem} content={content} author={author} img={img_src}/>
        </>
    )
}

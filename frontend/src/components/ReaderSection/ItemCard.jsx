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
                    <div className='reader-sec item-card-image' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 75%, rgba(0, 0, 0, 0)), linear-gradient(90deg, rgba(0, 0, 0, 0.3) 75%, rgba(0, 0, 0, 0)), url(${img_src})`}}>
                    </div>
                </div>
                <div className='reader-sec item-card-content-container'>
                    <div className='reader-sec item-card-title'>{title}</div>
                    <div className='reader-sec item-card-author'>{author}</div>             
                </div>
            </div>
            <ItemMain showItem={showItem} setShowItem={setShowItem} title={title} content={content} author={author} img={img_src} setRefresh={props.setRefresh} isAdmin={props.isAdmin}/>
        </>
    )
}

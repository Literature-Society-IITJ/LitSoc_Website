import React from 'react'
// import { ClubsData } from '../../data/Clubs'

export default function GeneralTop({item}) {

    
    let className = item.className
    
    let contentClass = className + '-content'
    let titleClass = contentClass + '-title'
    let taglineClass = contentClass + '-tagline'
    let id = item.id
    let title = item.title
    let tagline = item.tagline

    return (
        <div className={className} tabIndex={1}>
            <div className={contentClass}>
                <div className={titleClass} tabIndex={1} id={id}>{title}</div>
                <div className={taglineClass} tabIndex={2} id={id} style={{fontStyle: 'italic'}}>{tagline}</div>
            </div>
        </div>
    )
}

import React from 'react'

export default function ClubsTop(props) {

    let imgsrc = props.imgsrc
    let id = props.id
    let clubname = props.clubname
    let quote = props.quote

    return (
        <div className='clubs-top' tabIndex={1}>
            <div className='clubs-top-content'>
                <div className='clubs-top-content-title' tabIndex={1} id={id}>{clubname}</div>

                <div className='clubs-top-content-quote' tabIndex={2} id={id}>{quote}</div>
            </div>
        </div>
    )
}

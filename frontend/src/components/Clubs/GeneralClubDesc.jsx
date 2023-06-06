import React from 'react'

export default function GeneralClubDesc(props) {

    let id = props.id
    let logo = props.logo
    let desc = props.desc
    let quote = props.quote

    return (
        <div className='club-desc-quote-container' id={id}>
            <div className='club-description-container' id={id}>
                <div className='club-logo-container' id={id}>
                    <img className='club-logo' id={id} src={logo} alt="logo" width='300px' height='auto'/>
                </div>
                <div className='club-description' id={id}>
                    {desc}
                </div>
            </div>
            <div className='club-desc-quote' id={id}>
                {quote}
            </div>
        </div>
    )
}

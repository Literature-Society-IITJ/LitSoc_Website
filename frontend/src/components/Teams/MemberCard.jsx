import React, { useEffect, useState } from 'react'
// import secy from '../../media_back/team/aditi.jpeg'
import linkedin_logo from '../../media/Teams/linkedin-logo.svg'
import insta_logo from '../../media/Teams/instagram-logo.svg'
import gmail_logo from '../../media/Teams/gmail_icon.png'

// const img = '../../media/team/aditi.jpeg'


export default function MemberCard(props) {

    let name = props.name
    let quote = props.quote
    let id = props.id;
    let linkedin = props.linkedin
    let instagram = props.insta
    let gmail = 'goyal.22@iitj.ac.in'
    let img = '/src/media/' + props.image    

    return (
        <div className='member-card' id={id}>
            <div className='member-card-main' id={id}>
                <div className='member-card-image' id={id} tabIndex={1}>
                    <img src={ img } width='200px' height='200px' className='member-card-image-object'></img>
                </div>
                <div className='member-card-name' tabIndex={2}>{name}</div>
            </div>

            <div className='member-card-left' tabIndex={1}>
                <div className='member-card-image' id={id} tabIndex={1}>
                    <img src={ img } width='200px' height='200px' className='member-card-image-object'></img>
                </div>
            </div>

            <div className='member-card-right' tabIndex={2}>
                <div className='member-card-right-name' tabIndex={1}>{name}</div>
                <div className='member-card-right-quote' tabIndex={2}>{quote}</div>
                <div className='member-card-links'>
                    <a href={linkedin}>
                        <img src={linkedin_logo} alt="linkedin" />
                    </a>
                    <a href={instagram}>
                        <img src={insta_logo} alt="instagram" />
                    </a>
                    <a href={`mailto:${gmail}`}>
                        <img src={gmail_logo} alt="gmail" />
                    </a>
                </div>
            </div>
        </div>
    )
}

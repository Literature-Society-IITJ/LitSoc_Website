import React, { useEffect, useState } from 'react'
// import secy from '../../media_back/team/aditi.jpeg'
import { BiLogoInstagram, BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi'

// const img = '../../media/team/aditi.jpeg'


export default function MemberCard(props) {

    let name = props.name
    let quote = props.quote
    let id = props.id;
    let linkedin = props.linkedin
    let instagram = props.insta
    let gmail = 'goyal.22@iitj.ac.in'
    let img = 'https://litiitjb.litsoc.live/media/' + props.image
    let por = props.por


    return (
        <div className='member-card'>
            <div className='member-card-image-sociallinks-container'>
                <div className='member-card-image-container'>
                    <img src={ img } className='member-card-image'></img>
                </div>

                <div className='member-card-social-links'>
                    {
                        linkedin ? (
                            <a href={linkedin} target='/'>
                                <BiLogoLinkedin className='member-card-social-icon' />
                            </a>
                        ) : null
                    }
                    {
                        instagram ? (
                            <a href={instagram} target='/'>
                                <BiLogoInstagram className='member-card-social-icon' />
                            </a>
                        ) : null
                    }
                    {
                        gmail ? (
                            <a href={`mailto:${gmail}`}>
                                <BiLogoGmail className='member-card-social-icon' />
                            </a>
                        ) : null
                    }
                        
                       
                        
                </div>
            </div>

            <div className='member-card-info-content-container'>
                <div className='member-card-name-por-container'>
                    <div className='member-card-name'>{name}</div>
                    <div className='member-card-por'>{por}</div>
                </div>

                <div>
                    <div className='member-card-quote'>{ '\"' + quote + '\"'}</div>
                </div>
            </div>
        </div>

    )
}

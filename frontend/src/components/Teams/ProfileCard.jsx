import React from 'react'
import secy from '../../media/Teams/secy_dity.jpg'
import linkedin_logo from '../../media/Teams/linkedin-logo.svg'
import insta_logo from '../../media/Teams/instagram-logo.svg'

export default function ProfileCard() {

    let name = 'Aaditya Baranwal'
    let quote = 'Secretary LitSoc'
    let id = 'secy-2022';
    let linkedin = 'https://www.linkedin.com/in/aadityabaranwal'
    let instagram = 'https://www.instagram.com/__.aeternum.__/?hl=en'
    let gmail = 'mailto: goyal.22@iitj.ac.in'

    return (
        <div class='member-card' id={id}>
            <div class='member-card-main' id={id}>
                <div class='member-card-image' id={id} tabIndex={1}>
                    <img src={secy} width='200px' height='200px' className='member-card-image-object'></img>
                </div>
                <div class='member-card-name' tabIndex={2}>{name}</div>
            {/* ProfileCard */}
            </div>

            <div className='member-card-left' tabIndex={1}>
                <div class='member-card-image' id={id} tabIndex={1}>
                    <img src={secy} width='200px' height='200px' className='member-card-image-object'></img>
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
                        <img src={insta_logo} alt="linkedin" />
                    </a>
                    <a href={gmail}>
                        <img src={linkedin_logo} alt="linkedin" />
                    </a>
                </div>
            </div>
        </div>
    )
}

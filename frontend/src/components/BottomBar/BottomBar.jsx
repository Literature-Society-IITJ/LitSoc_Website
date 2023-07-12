import React, { useEffect, useState } from 'react'
import './BottomBar.css'
import BottombarLogos from '../../media/images/bottom-bar-logos.png'
// import lit_logo from '../../media/images/Navbar/lit_logo.png'
import { BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { RxEnvelopeClosed } from 'react-icons/rx'



export default function BottomBar() {

    let [IITJName, setIITJName] = useState('IIT Jodhpur');

    const [width, setWidth] = React.useState(window.innerWidth);
    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow)
        if (width > 900) {
            setIITJName('Indian Institute of Technology Jodhpur');
        } else {
            setIITJName(' IIT Jodhpur');
        }
    }, [window.innerWidth]);

    return (
        <div className='bottom-bar'>
            <div className='bottom-bar-box'>
                <div className='bottom-bar-logos' tabIndex={1}>
                    {/* <img src={BottombarLogos} alt="Logos" /> */}
                    <div></div>
                </div>

                <div className='bottom-bar-content' id='bottom-bar-contact' tabIndex={2}>
                    
                    <div style={{textTransform: 'uppercase', fontWeight: '500', lineHeight: '20px'}}>
                        Literature Society,
                        {
                            width > 900 ? <br /> : null
                        }
                        {IITJName}
                    </div>
                    {/* <br /> */}

                    <div>
                        <div className='contact-us-title'>Contact Us:</div>
                        <div className='contact-info-row'>
                            <div className='contact-info-item'>
                                <RxEnvelopeClosed className='contact-info-icon' />  literature@iitj.ac.in 
                            </div>
                            <div className='contact-info-item'>
                                <BsWhatsapp className='contact-info-icon' /> +91 70541 61004 
                            </div>
                        </div>
                    </div>

                    <div className='social-media-icons-container'>
                        <a href="https://www.instagram.com/litsociitj/" target='_blank'>
                            <BsInstagram className='social-media-icon' />
                        </a>
                        <a href="">
                            <BsLinkedin className='social-media-icon' />
                        </a>
                    </div>

                    <div style={{lineHeight: '20px'}}>
                        &copy; Copyright <strong>Literature Society, IIT Jodhpur.</strong> All Rights Reserved.
                    </div>
                </div>
            </div>

            
        </div>
    )
}

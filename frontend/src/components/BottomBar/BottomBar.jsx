import React from 'react'
import './BottomBar.css'
import BottombarLogos from '../../media/images/bottom-bar-logos.png'
import lit_logo from '../../media/images/Navbar/lit_logo.png'

export default function BottomBar() {
  return (
    <div className='bottom-bar'>
        <div className='bottom-bar-box'>
            <div className='bottom-bar-logos' tabIndex={1}>
                <img src={BottombarLogos} alt="Logos" />
            </div>

            <div className='bottom-bar-content' id='bottom-bar-contact' tabIndex={2}>
                <p>
                    <strong className='title'>Address: </strong> <br />
                    NH 62, Surpura Bypass Road, <br />
                    Karwar, Jodhpur, <br />
                    Rajasthan 342030 <br /><br />

                    <strong>Email:</strong><br />literature@iitj.ac.in <br /><br />
                    <strong>Phone No:</strong><br />+91 70541 61004 <br /><br />
                </p>
            </div>

            <div className='bottom-bar-content' id='bottom-bar-right' tabIndex={3}>
                <p>
                    <strong>Social Media Links</strong>
                </p>

                <div>
                    <a href="https://www.instagram.com/litsociitj/" target='_blank'>
                        <div>
                            <img src={lit_logo} alt="LitSoc | Instagram" />
                        </div>
                    </a>
                </div>

                <p>&copy; Copyright <strong>LitSoc IITJ.</strong> All Rights Reserved.</p>
            </div>
        </div>

        
    </div>
  )
}

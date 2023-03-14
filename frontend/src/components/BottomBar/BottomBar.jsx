import React from 'react'
import './BottomBar.css'
import Bottombar from '../../media/images/Bottombar.png'

export default function BottomBar() {
  return (
    <div className='bottom-bar'>
        <div className='bottom-bar-box'>
            <div className='bottom-bar-logos' tabIndex={1}>
                <img src={Bottombar} alt="Logos" height='370px' />
            </div>

            <div className='bottom-bar-middle' tabIndex={2}>
                <h1>Address</h1>
                <p>
                    NH 62, Surpura Bypass Road, <br />
                    Karwar, Jodhpur, <br />
                    Rajasthan 342030 <br /><br />

                    <strong>Email: </strong>literature@iitj.ac.in <br />
                    <strong>Phone No: </strong> +91 70541 61004 <br />
                </p>

                {/* <p>
                    NH 62, Surpura Bypass Rd, <br></br>
                    Karwar, Rajasthan 342030<br><br></br></br>
                    <strong>Email:</strong> ecell@iitj.ac.in<br></br>
                    <strong>Phone:</strong> +1 5589 55488 55<br></br>
                </p> */}
                <p></p>
            </div>
        </div>

        
    </div>
  )
}

import React from 'react'
import Pragati from '../../media/fandom/team/Pragati.jpeg'
import Vignesh from '../../media/fandom/team/Vignesh.jpeg'
import Maulik from '../../media/fandom/team/Maulik.jpeg'
// import Shyam from '../../media/fandom/team/Shyam.jpeg'
import Aditya from '../../media/fandom/team/Aditya.jpeg'
import { BiLogoWhatsapp, BiLogoGmail } from 'react-icons/bi'




export default function Team() {
    return (
        <div className='otacon-team-container'>

            <div className='otacon-team-card'>
                <img src={Maulik} className='otacon-team-card-img' />
                <div className='otacon-team-card-text'>
                    <h3 className='otacon-team-card-name'>Maulik Snehal Desai</h3>
                    <div className='contact-links'>
                        <a className='contact-icon-link' target='/' href='https://api.whatsapp.com/send?phone=917002470962'>
                            <BiLogoWhatsapp />
                        </a>
                        <a className='contact-icon-link' href='mailto:b22cs061@iitj.ac.in'>
                            <BiLogoGmail />
                        </a>
                    </div>
                </div>
            </div>

            <div className='otacon-team-card'>
                <img src={Pragati} className='otacon-team-card-img' />
                <div className='otacon-team-card-text'>
                    <h3 className='otacon-team-card-name'>Pragati Sinha</h3>
                    <div className='contact-links'>
                        <a className='contact-icon-link' target='/' href='https://api.whatsapp.com/send?phone=917002470962'>
                            <BiLogoWhatsapp />
                        </a>
                        <a className='contact-icon-link' href='mailto:b22mt048@iitj.ac.in'>
                            <BiLogoGmail />
                        </a>
                    </div>
                </div>
            </div>

            <div className='otacon-team-card'>
                <img src={Vignesh} className='otacon-team-card-img' />
                <div className='otacon-team-card-text'>
                    <h3 className='otacon-team-card-name'>Vignesh Vijay Mandavkar</h3>
                    <div className='contact-links'>
                        <a className='contact-icon-link' target='/' href='https://wa.me/qr/3PFESRSGJOVYN1'>
                            <BiLogoWhatsapp />
                        </a>
                        <a className='contact-icon-link' href='mailto:b22cs061@iitj.ac.in'>
                            <BiLogoGmail />
                        </a>
                    </div>
                </div>
            </div>

            <div className='otacon-team-card'>
                <img src={Aditya} className='otacon-team-card-img' />
                <div className='otacon-team-card-text'>
                    <h3 className='otacon-team-card-name'>Aditya Mundhara</h3>
                    <div className='contact-links'>
                        <a className='contact-icon-link' target='/' href='https://api.whatsapp.com/send?phone=917002470962'>
                            <BiLogoWhatsapp />
                        </a>
                        <a className='contact-icon-link' href='mailto:b22me006@iitj.ac.in'>
                            <BiLogoGmail />
                        </a>
                    </div>
                </div>
            </div>

            <div className='otacon-team-card'>
                <img src={Maulik} className='otacon-team-card-img' />
                <div className='otacon-team-card-text'>
                    <h3 className='otacon-team-card-name'>KKN Shyam Sathvik</h3>
                    <div className='contact-links'>
                        <a className='contact-icon-link' target='/' href='https://api.whatsapp.com/send?phone=917002470962'>
                            <BiLogoWhatsapp />
                        </a>
                        <a className='contact-icon-link' href='mailto:b22ee036@iitj.ac.in'>
                            <BiLogoGmail />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

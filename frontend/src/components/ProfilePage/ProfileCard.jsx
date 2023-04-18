import React from 'react'
import secy from '../../media/Teams/secy_dity.jpg'


export default function ProfileCard() {
    return (
        <div className='profile-page profile-card'>
            <div className='profile-card-image-container'>
                <img src={secy} width='300px' height='300px' className='profile-card-image' />
            </div>

            <div className='profile-card-name'>
                Aaditya Baranwal
            </div>
            <div className='profile-card-position'>
                Secretary, Admin
            </div>
        </div>
    )
}

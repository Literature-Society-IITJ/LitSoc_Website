import React, { useEffect, useState } from 'react'
import profile from '../../media/images/profile-icon.jpg'


export default function ProfileCard(props) {

    console.log(props)
    let userDetails = props.userDetails

    return (
        <div className='profile-page profile-card'>
            <div className='profile-card-image-container'>
                <img src={profile} width='300px' height='300px' className='profile-card-image' />
                <div className='profile-card-image-upload'>
                    <button>
                        Upload Image
                    </button>
                </div>
            </div>

            <div className='profile-card-name'>
                {userDetails.username}
            </div>
            <div className='profile-card-position'>
                {userDetails.role}
            </div>
        </div>
    )
}

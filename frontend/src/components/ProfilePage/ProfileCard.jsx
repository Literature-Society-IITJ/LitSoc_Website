import React, { useEffect, useState } from 'react'
import profile from '../../media/images/profile-icon.jpg'
import { RxInput } from 'react-icons/rx'

export default function ProfileCard(props) {

    console.log(props)
    let userDetails = props.userDetails

    return (
        <div className='profile-page profile-card'>
            <div className='profile-card-image-container'>
                <img src={profile} className='profile-card-image' />
                <div className='profile-card-image-upload'>
                    {/* <label className='image-upload-label' htmlFor="profile-image">Choose File</label> */}
                    <input id='profile-image' type='file' accept='images/*' />
                    <button> <RxInput /> Upload Photo</button>
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

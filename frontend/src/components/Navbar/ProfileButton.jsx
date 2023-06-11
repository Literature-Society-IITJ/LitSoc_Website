import { useState, useEffect } from 'react'
import React from 'react'
import { getProfileImage } from '../../api/axios'

export default function ProfileButton() {

    let [profileImage, setProfileImage] = useState('') 
    useEffect(() => {
        getProfileImage().then((data) => {setProfileImage('/src/media/' + data)})}
        , [])

    return (
        <div className="upper-bar-right">
            <div className="profile-button" id="profile-redirect">
                <a href="/profile" className='profile-button-anchor' style={{backgroundImage: `url(${profileImage})`}}></a>
            </div>
        </div>
    )
}

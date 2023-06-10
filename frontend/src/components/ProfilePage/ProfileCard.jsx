import React, { useEffect, useState } from 'react'
import profile from '../../media/images/profile-icon.jpg'
import { RxInput } from 'react-icons/rx'
import { getProfileImage, updateProfileImage } from '../../api/axios'

export default function ProfileCard(props) {

    let [refresh, setRefresh] = useState(false)

    let userDetails = props.userDetails

    let [profileImage, setProfileImage] = useState('') 
    useEffect(() => {
        getProfileImage().then((data) => {setProfileImage('src/media/' + data)})
        setRefresh(false)}
        , [refresh])

    return (
        <div className='profile-page profile-card'>
            <div className='profile-card-image-container'>
                <img src={profileImage} className='profile-card-image' />
                <div className='profile-card-image-upload'>
                    <label className='image-upload-label' htmlFor="profile-image">
                        <input id='profile-image' type='file' accept='images/*' 
                                onChange={()=>{updateProfileImage(document.getElementById('profile-image').value)
                                                setRefresh(true)}} />
                        <div>
                            <div className="profile-image-upload-icon">
                                <RxInput />
                            </div>
                            <div>
                                Upload Photo
                            </div>
                        </div>
                    </label>
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

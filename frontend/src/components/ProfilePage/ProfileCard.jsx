import React, { useEffect, useState } from 'react'
import profile from '../../media/images/profile-icon.jpg'
import { RxInput, RxPencil1 } from 'react-icons/rx'
import { getProfileImage, updateProfileImage } from '../../api/axios'

export default function ProfileCard(props) {

    let [refresh, setRefresh] = useState(false)

    let userDetails = props.userDetails

    let [profileImage, setProfileImage] = useState('') 
    useEffect(() => {
        getProfileImage().then((data) => {setProfileImage('/src/media/' + data)})
        setRefresh(false)}
        , [refresh])

    return (
        <div className='profile-page profile-card'>
            <div className='profile-card-image-container'>
                <img src={profileImage} className='profile-card-image' />
                <div className='profile-card-image-upload'>
                    <label className='image-upload-label' htmlFor="profile-image">
                        <input className='profile-image-input-file' id='profile-image' type='file' name='myImage' accept='images/*' 
                                onChange={()=>{ const formData = new FormData()
                                                const imageFile = document.getElementById('profile-image').files[0]
                                                formData.append("myImage", imageFile)
                                                updateProfileImage(formData)
                                                setRefresh(true)
                                                // console.log(22222222222, formData)
                                                // console.log(document.getElementById('profile-image').value)
                                                // document.getElementById('profile-image').value = ''
                                                // console.log(44444444444, imageFile)
                                                // console.log(33333333, formData)
                                                // console.log(formData.get("myImage"))
                                                // setRefresh(false)
                                                }} />


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
                <div>
                    {userDetails.username}
                </div>
                <div className='profile-card-name-edit-button'>
                    <RxPencil1 />
                </div>
            </div>
            <div className='profile-card-position'>
                {
                    (userDetails.is_admin) ? `admin` : `${userDetails.role}` 
                }
            </div>
        </div>
    )
}

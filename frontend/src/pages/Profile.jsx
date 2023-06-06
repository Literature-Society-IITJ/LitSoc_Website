import React from 'react'
import BottomBar from '../components/BottomBar/BottomBar'
import ProfileMain from '../components/ProfilePage/ProfileMain'
import '../components/ProfilePage/ProfilePage.css'

export default function Profile() {
    return (
        <>
            <div className='profile-main'>
                <ProfileMain />
                <BottomBar />
            </div>
        </>
    )
}

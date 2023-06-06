import {React, useEffect, useState} from 'react'
// import './ProfilePage.css'
import ProfileUpper from './ProfileUpper'
import ProfileCard from './ProfileCard'
import ProfileDataCard from './ProfileDataCard'
import BookRequestsSection from './BookRequestsSection'
import ContentUploadRequests from './ContentUploadRequests'
import IssuedBooksSection from './IssuedBooksSection'
import ModeratorRequests from './ModeratorRequests'
import { getUserData } from '../../api/axios'
import AdminRequestCard from '../Navbar/AdminRequestCard'

function fetchUserData(setUserData) {
    console.log('first')
    getUserData()
    .then((val) => {
        console.log(val)
        setUserData(val)
    })
    .catch((err) => {
        console.log(err)
    })
}

export default function ProfileMain() {

    let [userData, setUserData] = useState('')

    useEffect(() => {getUserData().then((data) => {setUserData(data)})}, [])

    let role = 'moderator'
    let isAdmin = true

    console.log(userData)

    return (
        <div className='profile-page-display'>
            <ProfileUpper />
            <div className='profile-page-body'>
                <div className='profile-page-body-general'>
                    {userData != '' && <ProfileCard userDetails={userData.member_details}/>}
                    <ProfileDataCard bookDetails={userData.book}/>
                </div>
                {
                    (role == 'moderator' || isAdmin) ? (
                        <div className='profile-page mod-admin-section'>
                            <AdminRequestCard />
                            <BookRequestsSection bookDetails={userData.book}/>
                            {/* <ContentUploadRequests /> */}
                            <IssuedBooksSection />
                            {
                                isAdmin ? (
                                    <ModeratorRequests />
                                    ) : null
                            }
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

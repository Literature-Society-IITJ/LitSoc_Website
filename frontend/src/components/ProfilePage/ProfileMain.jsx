import {React, useEffect, useState} from 'react'
import './ProfilePage.css'
import ProfileUpper from './ProfileUpper'
import ProfileCard from './ProfileCard'
import ProfileDataCard from './ProfileDataCard'
import BookRequestsSection from './BookRequestsSection'
import ContentUploadRequests from './ContentUploadRequests'
import IssuedBooksSection from './IssuedBooksSection'
import ModeratorRequests from './ModeratorRequests'
import { getUserData } from '../../api/axios'

function fetchUserData(setUserData) {
    console.log('first')
    // console.log('sec')
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

    // useEffect(() => {
    // fetchUserData(setUserData)
    // }, [])

    // let userData
    useEffect(() => {getUserData().then((data) => {setUserData(data)})}, [])
    // let [userData, setUserData] = useState('')
    // getUserData().then((data) => {setUserData(data)})
    // console.log(userData)

    
    // let userDetails = userData.member_details
    // let bookDetails = userData.book
    // let contentDetails = userData.content

    let role = 'moderator'
    let isAdmin = true

    console.log(userData)

    return (
        <div className='profile-page-main'>
            <ProfileUpper />
            <div className='profile-page-body'>
                <div className='profile-page-body-general'>
                    {userData != '' && <ProfileCard userDetails={userData.member_details}/>}
                    <ProfileDataCard bookDetails={userData.book}/>
                </div>
                {
                    (role == 'moderator' || isAdmin) ? (
                        <div className='profile-page mod-admin-section'>
                            <div className='profile-page-requests-section'>
                                <BookRequestsSection bookDetails={userData.book}/>
                                {/* <ContentUploadRequests /> */}
                                <IssuedBooksSection />

                            </div>
                            {
                                isAdmin ? (
                                    <ModeratorRequests />
                                    // <div></div>
                                ) : null
                            }
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

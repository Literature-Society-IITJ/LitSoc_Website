import {React, useEffect, useState} from 'react'
import ProfileUpper from './ProfileUpper'
import ProfileCard from './ProfileCard'
import ProfileDataCard from './ProfileDataCard'
import BookRequestsSection from './BookRequestsSection'
import ContentUploadRequests from './ContentUploadRequests'
import IssuedBooksSection from './IssuedBooksSection'
import ModeratorRequests from './ModeratorRequests'
import { getUserData } from '../../api/axios'
import AdminRequestCard from './AdminRequestCard'

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

    let [showBookRequests, setShowBookRequests] = useState(false)
    let [showIssuedBooks, setShowIssuedBooks] = useState(false)
    let [showContentUploadRequests, setShowContentUploadRequests] = useState(false)
    let [showModeratorDetails, setShowModeratorDetails] = useState(false)


    let [userData, setUserData] = useState('')

    useEffect(() => {getUserData().then((data) => {setUserData(data)})}, [])

    console.log(userData)

    // let role = userData.member_details.role
    let role = 'member'
    // let isAdmin = userData.member_details.is_admin
    let isAdmin = true


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
                            <AdminRequestCard
                                title='Book Issue Requests'
                                showSection={showBookRequests}
                                setShowSection={setShowBookRequests} />

                            <AdminRequestCard
                                title='Issued Books'
                                showSection={showIssuedBooks}
                                setShowSection={setShowIssuedBooks} />

                            <AdminRequestCard
                                title='Reader Section Upload Requests' 
                                showSection={showContentUploadRequests}
                                setShowSection={setShowContentUploadRequests} />

                            {
                                (isAdmin) ? (
                                    <AdminRequestCard
                                        title='Moderator Details'
                                        showSection={showModeratorDetails}
                                        setShowSection={setShowModeratorDetails} />
                                    ) : null
                            }
                        </div>
                    ) : null
                }


                {
                    (role == 'moderator' || isAdmin) ? (
                        <div>
                            {
                                (showBookRequests) ? (
                                    <BookRequestsSection setShowBookRequests={setShowBookRequests}/>
                                ) : null
                            }

                            {
                                (showIssuedBooks) ? (
                                    <IssuedBooksSection setShowIssuedBooks={setShowIssuedBooks}/>
                                ) : null
                            }

                            {
                                (showContentUploadRequests) ? (
                                    <ContentUploadRequests />
                                ) : null
                            }

                            {
                                (isAdmin) ? (
                                    (showModeratorDetails) ? (
                                        <ModeratorRequests 
                                            setShowModeratorDetails={setShowModeratorDetails} />
                                    ) : null
                                ) : null
                            }
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}

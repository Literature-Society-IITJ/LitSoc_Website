import React from 'react'
import './ProfilePage.css'
import ProfileUpper from './ProfileUpper'
import ProfileCard from './ProfileCard'
import ProfileDataCard from './ProfileDataCard'
import BookRequestsSection from './BookRequestsSection'
import ContentUploadRequests from './ContentUploadRequests'
import IssuedBooksSection from './IssuedBooksSection'
import ModeratorRequests from './ModeratorRequests'


export default function ProfileMain() {

    let role = 'moderator'
    let isAdmin = true

    return (
        <div className='profile-page-main'>
            <ProfileUpper />
            <div className='profile-page-body'>
                <div className='profile-page-body-general'>
                    <ProfileCard />
                    <ProfileDataCard />
                </div>
                {
                    (role == 'moderator' || isAdmin) ? (
                        <div className='profile-page mod-admin-section'>
                            <div className='profile-page-requests-section'>
                                <BookRequestsSection />
                                <ContentUploadRequests />
                                <IssuedBooksSection />

                            </div>
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

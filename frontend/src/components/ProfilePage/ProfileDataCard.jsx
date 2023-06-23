import React, { useState } from 'react'
import AdminRequestCard from './AdminRequestCard'
import ContentUploadForm from './ContentUploadForm'

import { RxUpload, RxDrawingPin, RxLayers } from 'react-icons/rx'
import UploadedContent from './UploadedContent'
import ReadBooks from './ReadBooks'


export default function ProfileDataCard(props) {

    // const bookData = props.bookDetails
    let userData = props.userData
    console.log(userData)

    let [showReadBooks, setShowReadBooks] = useState(false)
    let [showUploadedContent, setShowUploadedContent] = useState(false)
    let [showContentUploadForm, setShowContentUploadForm] = useState(false)


    return (
        <div className='profile-page general-data-card'>

            <div className='general-data-card-books-info'>
                <div className='profile-issued-book-info'>
                    {
                        (userData.book.book_name) ? (
                            <>
                                <div className='issuedbook-header'>
                                    Issued Book:
                                </div>

                                <div className='issuedbook-name'>
                                    {userData.book.book_name.name + ' - ' + userData.book.book_name.author}
                                </div>
                                <div>
                                    {'To be returned by: ' + `${userData.book.return_date}`} 
                                </div>
                            </>
                        ) : 
                            (
                                <>
                                    <div className='issuedbook-header'>
                                        No Books Issued 
                                    </div>
                                    <div>
                                        <a className='issued-book-issue-now-anchor' href="/library">Issue Book Now</a>
                                    </div>
                                </>
                            )
                    }
                    
                </div>
                
                <button className='profile-book-info-button uploaded-content-button' onClick={() => setShowReadBooks(true)}>
                    Check Read Books
                    <div className='profile-book-info-button-icons'>
                        <RxLayers />   
                    </div>
                </button>
            </div>

            <div className='general-data-card-content-info'>
                <button className='profile-content-info-button uploaded-content-button' onClick={() => setShowUploadedContent(true)}>
                    <div className='profile-content-info-button-icons'>
                        <RxDrawingPin />   
                    </div>
                    See Uploaded Content
                </button>

                <button className='profile-content-info-button upload-content-button' onClick={() => setShowContentUploadForm(true)}>
                    Upload Content
                    <div className='profile-content-info-button-icons'>
                        <RxUpload />   
                    </div>
                </button>
            </div>

            {
                (showReadBooks) ? (
                    <ReadBooks setShowReadBooks={setShowReadBooks} />
                ) : null
            }

            {
                (showContentUploadForm) ? (
                    <ContentUploadForm setShowContentUploadForm={setShowContentUploadForm} username={userData.member_details.username} />
                ) : null
            }

            {
                (showUploadedContent) ? (
                    <UploadedContent setShowUploadedContent={setShowUploadedContent} uploadedContent={userData.content} />
                ) : null
            }
            
        </div>
    )
}

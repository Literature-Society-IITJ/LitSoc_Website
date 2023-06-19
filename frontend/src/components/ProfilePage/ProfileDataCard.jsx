import React, { useState } from 'react'
import AdminRequestCard from './AdminRequestCard'
import ContentUploadForm from './ContentUploadForm'

import { RxCross2 } from 'react-icons/rx'
import UploadedContent from './UploadedContent'
import ReadBooks from './ReadBooks'


export default function ProfileDataCard(props) {

    // const bookData = props.bookDetails
    let userData = props.userData

    let [showReadBooks, setShowReadBooks] = useState(false)
    let [showUploadedContent, setShowUploadedContent] = useState(false)
    let [showContentUploadForm, setShowContentUploadForm] = useState(false)


    return (
        <div className='profile-page general-data-card'>
            <div className='general-data-card-books-info'>
                <div className='issuedbook-header'>
                    Issued Book:
                </div>
                {
                    true ? (
                        <>
                            <div className='issuedbook-name'>
                                {/* {bookData.book_name.name} */}
                            </div>
                            <div>
                                Return Date: 
                            </div>
                        </>
                    ) : <div>No book issued.</div>
                }

                <button onClick={() => setShowReadBooks(true)}>Read Books</button>
            </div>

            <div className='general-data-card-content-info'>
                <button onClick={() => setShowUploadedContent(true)}>Uploaded Content</button>
                <button onClick={() => setShowContentUploadForm(true)}>Upload Content</button>
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

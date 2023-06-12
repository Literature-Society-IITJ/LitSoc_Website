import React, { useState } from 'react'
import AdminRequestCard from './AdminRequestCard'
import ContentUploadForm from './ContentUploadForm'


export default function ProfileDataCard(props) {

    const bookData = props.bookDetails

    let [showContentUploadForm, setShowContentUploadForm] = useState(true)

    return (
        <div className='profile-page general-data-card'>
            <div className='general-data-card-issuedbook-info'>
                <div className='issuedbook-header'>
                    Issued Book:
                </div>
                <br />

                {
                    bookData ? (
                        <>
                            <div className='issuedbook-name'>
                                {bookData.book_name.name}
                            </div>
                            <div>
                                Return Date: {bookData.return_date}
                            </div>
                        </>
                    ) : <div>No book issued.</div>
                }
            </div>

            <AdminRequestCard title='Issued Books'/>


            <div className='general-data-card-uploadedcontent-info'>
                <div className='issuedbook-header'>
                    Uploaded Content:
                </div>
                <br />
                <div className='issuedbook-name'>
                    {/* Harry Potter and the Philosophers Stone */}
                </div>
            </div>

            {
                (showContentUploadForm) ? (
                    <ContentUploadForm setShowContentUploadForm={setShowContentUploadForm}/>
                ) : null
            }
        </div>
    )
}

import React from 'react'

export default function ProfileDataCard(props) {

    // console.log(props.bookDetails)
    const bookData = props.bookDetails
    // console.log(bookData)
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



            <div className='general-data-card-uploadedcontent-info'>
                <div className='issuedbook-header'>
                    Uploaded Content:
                </div>
                <br />
                <div className='issuedbook-name'>
                    {/* Harry Potter and the Philosophers Stone */}
                </div>
            </div>
        </div>
    )
}

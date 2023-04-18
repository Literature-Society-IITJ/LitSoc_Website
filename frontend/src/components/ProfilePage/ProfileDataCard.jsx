import React from 'react'

export default function ProfileDataCard() {
    return (
        <div className='profile-page general-data-card'>
            <div className='general-data-card-issuedbook-info'>
                <div className='issuedbook-header'>
                    Issued Book:
                </div>
                <br />
                <div className='issuedbook-name'>
                    Harry Potter and the Philosophers Stone
                </div>
                <div>
                    Return Date: 11th Dec 2023
                </div>
            </div>



            <div className='general-data-card-uploadedcontent-info'>
                <div className='issuedbook-header'>
                    Uploaded Content:
                </div>
                <br />
                <div className='issuedbook-name'>
                    Harry Potter and the Philosophers Stone
                </div>
            </div>
        </div>
    )
}

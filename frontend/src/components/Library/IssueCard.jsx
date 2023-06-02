import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx"
import { isUserBook, issueRequest } from '../../api/axios'


function canIssueInfo(setCanIssue) {
    isUserBook()
    .then((val) => {
        setCanIssue(val)
    })
    .catch((err) => {
        console.log(err)
    })
}

export default function IssueCard(props) {

    let [canIssue, setCanIssue] = useState('')
    
    canIssueInfo(setCanIssue)
    
    let bookDetails = props.bookDetail

    return (
        props.showBookItem ? (
            <div className='book-card-screen'>
                <div className='book-card'>
                    <div className='book-card-top'>
                        <div>Book Details</div>
                        <div className='book-card-x-button' onClick={()=>props.setShowBookItem(false)}>
                            <RxCross2 />
                        </div>
                    </div>

                    {
                    (canIssue=="yes") ? (
                        <>
                            <div className='book-card-details'>
                                <div>
                                    <div className='book-card-details-head'>
                                        Name:&nbsp;&nbsp;
                                    </div>
                                    <div className='book-card-details-data'>
                                        {bookDetails.name}
                                    </div>
                                </div>

                                <div>
                                    <div className='book-card-details-head'>
                                        Author:&nbsp;&nbsp;
                                    </div>
                                    <div className='book-card-details-data'>
                                        {bookDetails.author}
                                    </div>
                                </div>

                                <div>
                                    <div className='book-card-details-head'>
                                        Book Id:&nbsp;&nbsp;
                                    </div>
                                    <div className='book-card-details-data'>
                                        {bookDetails.book_id}
                                    </div>
                                </div>

                                <div>
                                    <div className='book-card-details-head'>
                                        ISBN:&nbsp;&nbsp;
                                    </div>
                                    <div className='book-card-details-data'>
                                        {bookDetails.isbn}
                                    </div>
                                </div>

                                <div>
                                    <div className='book-card-details-head'>
                                        Category:&nbsp;&nbsp;
                                    </div>
                                    <div className='book-card-details-data'>
                                        {bookDetails.category}
                                    </div>
                                </div>

                                <div>
                                    <div className='book-card-details-head'>
                                        Return Date:&nbsp;&nbsp;
                                    </div>
                                    <div className='book-card-details-data'>
                                        {bookDetails.date.split(' ')[0]}
                                    </div>
                                </div>
                            </div>

                            <div className='book-card-bottom'>
                                <button className='book-card-button' onClick={()=>[ issueRequest(bookDetails.book_id), window.location.reload()] }>Issue Book</button>
                            </div>
                        </>
                        ): 
                        (canIssue==="requested") ? (
                                <div className='issue-error-message'>You already have a book issue request in process.</div>
                            ) : <div className='issue-error-message'>Please return the first book to issue next.</div>
                    }
                </div>
            </div>) :  null
    )
}

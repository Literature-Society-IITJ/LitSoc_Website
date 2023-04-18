import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx"
import { isUserBook, issueRequest } from '../../api/axios'


function canIssueInfo(setCanIssue) {
    isUserBook()
    .then((val) => {
        console.log(val)
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
    let returnDate = 'xxxx yyyyy zzzzz'

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
                                <div>{bookDetails.name}</div>
                            </div>
                            <div>
                                <button onClick={()=>{ issueRequest(bookDetails.book_id)} }>Issue Book</button>
                            </div>
                        </>
                        )
                        
                        : 
                        
                            (canIssue==="requested") ? (
                                <div>You already have a book issue request in process.</div>
                            ) : <div>Please return the first book to issue next.</div>

                        
                        
                    }
                </div>
            </div>) :  null
    )
}

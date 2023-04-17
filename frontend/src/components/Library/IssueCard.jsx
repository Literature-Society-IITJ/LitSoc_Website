import React from 'react'
import { RxCross2 } from "react-icons/rx"
import { issueRequest } from '../../api/axios'


export default function IssueCard(props) {

    let currentIssued = true
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
                    currentIssued ? (
                        <>
                            <div className='book-card-details'>
                                <div>{bookDetails.name}</div>
                            </div>
                            <div>
                                <button onClick={()=>{ issueRequest(bookDetails.book_id)} }>Issue Book</button>
                            </div>
                        </>
                        ) : <div>Please return the first book to issue next.</div>
                    }
                </div>
            </div>) :  null
    )
}

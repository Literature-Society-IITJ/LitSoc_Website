import React from 'react'
import { RxCross2 } from "react-icons/rx"


export default function IssueCard(props) {

    let currentIssued = true
    let bookDetails = props.bookDetail

    return (
        props.showBookItem ? (
            <div className='book-card-screen'>
                <div className='book-card'>
                    <div className='book-card-top'>
                        <div className='book-card-x-button' onClick={()=>props.setShowBookItem(false)}>
                            <RxCross2 />
                        </div>
                    </div>

                    {
                    currentIssued ? (
                        <>
                        <div>{bookDetails.name}</div>
                        <div>
                            <button>Issue Book</button>
                        </div>
                        </>
                        ) : <div>Please return the first book to issue next.</div>
                    }
                </div>
            </div>) :  null
    )
}

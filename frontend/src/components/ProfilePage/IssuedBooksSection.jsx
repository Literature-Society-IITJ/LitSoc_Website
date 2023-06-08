import React, { useState, useEffect } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { getIssuedBooks, markBookReturned } from '../../api/axios'

export default function IssuedBooksSection(props) {

    let [refresh, setRefresh] = useState(false)

    const [issuedBooksList, setIssuedBooksList] = useState([])
    useEffect(() => {
        getIssuedBooks().then((data) => {setIssuedBooksList(data)})
        setRefresh(false)}
        , [refresh])
        

    return (
        <div className='admin-action-modal'>
            <div className='admin-action-card moderator-requests-card'>
                <div className='admin-action-card-upperbar'>
                    <div>Issued Books Details</div>
                    <div className='admin-action-card-x-button' onClick={()=>props.setShowIssuedBooks(false)}>
                        <RxCross2 />
                    </div>
                </div>

                <div className='admin-action-card-body admin-section-table-display-section'>
                    {
                        (issuedBooksList.length) ? (
                            <table className='admin-section-table'>
                                <thead className='admin-section-table-headers-container'>
                                    <tr>
                                        <th className='admin-section-table-headers issued-books-book-id'>Book Details</th>
                                        <th className='admin-section-table-headers issued-books-borrower-details'>Borrower Details</th>
                                        <th className='admin-section-table-headers issued-books-issue-date'>Issue Date</th>
                                        <th className='admin-section-table-headers issued-books-return-date'>Expected Return Date</th>
                                        <th className='admin-section-table-headers issued-books-return-button'>Mark as Returned</th>
                                    </tr>
                                </thead>

                                <tbody className='admin-section-table-body'>
                                    {
                                        issuedBooksList.map ((issuedBook) => (
                                            <tr className='admin-section-table-details-container'>
                                                <td className='issued-books-book-id'>
                                                    <div className='issued-books-book-details-name'>
                                                        <div>
                                                            {issuedBook.book_info.name}
                                                        </div>
                                                        <div >
                                                            {issuedBook.book_info.book_id}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='issued-books-borrower-details'>
                                                    <div className='issued-books-borrower-details-name'>
                                                        <div>
                                                            {issuedBook.member_info.name}
                                                        </div>
                                                        <div className='issued-books-borrower-roll-number'>
                                                            {issuedBook.member_info.roll_number}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='issued-books-issue-date'>{issuedBook.issue_date}</td>
                                                <td className='issued-books-return-date'>{issuedBook.return_date}</td>
                                                <td className='issued-books-return-button'>
                                                    <button onClick={()=>{
                                                        markBookReturned(issuedBook.book_info.book_id)
                                                        setRefresh(true)
                                                        }}>Returned</button>
                                                </td> 
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        ) : <div className="no-issued-books-message">All the books are in the library :|</div>
                    }
                </div>
                <div className='admin-action-lower-border'></div>
            </div>
        </div>
    )
}

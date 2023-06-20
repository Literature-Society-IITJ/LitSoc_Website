import React, { useEffect, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { getReadBooks } from '../../api/axios'


export default function ReadBooks(props) {

    let [readBooksList, setReadBooksList] = useState([])
    useEffect( () => {getReadBooks().then((response) => {setReadBooksList(response)})} , [])

    console.log(readBooksList)

    return (
        <>
            <div className='content-upload-form-body'>
                <div className='admin-action-card-upperbar'>
                    <div>Content Upload Form</div>
                    <div className='admin-action-card-x-button' onClick={()=>props.setShowReadBooks(false)}>
                        <RxCross2 />
                    </div>
                </div>


                <div className='admin-action-card-body admin-section-table-display-section'>
                    {
                        (readBooksList.length) ? (
                            <table className='admin-section-table'>
                                <thead className='admin-section-table-headers-container'>
                                    <tr>
                                        <th className='admin-section-table-headers issued-books-book-id'>Book</th>
                                        <th className='admin-section-table-headers issued-books-borrower-details'>Author</th>
                                    </tr>
                                </thead>

                                <tbody className='admin-section-table-body'>
                                    {
                                        readBooksList.map ((issuedBook) => (
                                            <tr className='admin-section-table-details-container'>
                                                <td className='issued-books-issue-date'>{issuedBook.book}</td>
                                                <td className='issued-books-return-date'>{issuedBook.author}</td> 
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        ) : <div className="no-issued-books-message">All the books are in the library :|</div>
                    }
                </div>
            </div>
            
        </>
    )
}

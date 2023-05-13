import React, { useState, useEffect } from 'react'
import { getIssuedBooks, markBookReturned } from '../../api/axios'

export default function IssuedBooksSection() {

    const [issuedBooksList, setIssuedBooksList] = useState([])
    // let load_again = 1
    // const [load_again, setload_again] = useState(true)

    useEffect(() => {
        getIssuedBooks().then((data) => {setIssuedBooksList(data)})}
        , [])

    // console.log(issuedBooksList)

    return (
        <div className='requests-section book-issue-sec'>
            <div className='requests-section-head book-issue-requests'>
                <h2>Issued Books</h2>
            </div>

            <div className='issue-requests-table-container'>
                <table className='ssue-requests-table'>
                    <thead>
                        <tr>
                            <th className='isbn'>Book Id</th>
                            <th className='bookname'>Roll Number</th>
                            <th className='author'>Issue Date</th>
                            <th className='genre'>Expected Return Date</th>
                            <th className='button'>Mark as Returned</th>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        issuedBooksList.length ? issuedBooksList.map((issuedBook) => (
                                <tr className='book-display-body'>
                                    <td className='isbn'>{issuedBook.book_info.book_id}</td>
                                    <td className='bookname'>{issuedBook.member_info.roll_number}</td>
                                    <td>{issuedBook.issue_date}</td>
                                    <td>{issuedBook.return_date}</td>
                                    <td className='button'>
                                        <button onClick={()=>{
                                            console.log("hereeee", issuedBook)
                                            markBookReturned(issuedBook.book_info.book_id)
                                            location.reload()
                                        }}>Returned</button>
                                    </td> 
                                </tr>
                            )): 
                            <tr>
                                <td colSpan={5}>No Books Issued</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

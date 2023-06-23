import React, { useEffect, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { getReadBooks } from '../../api/axios'


export default function ReadBooks(props) {

    let [readBooksList, setReadBooksList] = useState([])
    useEffect( () => {getReadBooks().then((response) => {setReadBooksList(response)})} , [])

    console.log(readBooksList)

    return (
        <>
            <div className='read-books-display-body'>
                <div className='read-books-display-upperbar'>
                    <div>
                        {`Read Books (${readBooksList.length})`}
                    </div>
                    <div className='read-books-display-x-button' onClick={()=>props.setShowReadBooks(false)}>
                        <RxCross2 />
                    </div>
                </div>


                <div className='admin-action-card-body read-books-display-table-display-section'>
                    {
                        (readBooksList.length) ? (
                            <table className='read-books-display-table'>
                                <thead className='read-books-display-table-headers-container'>
                                    <tr>
                                        <th className='read-books-display-table-headers read-books-book-name'>Book</th>
                                        <th className='read-books-display-table-headers read-books-author'>Author</th>
                                    </tr>
                                </thead>

                                <tbody className='read-books-display-table-body'>
                                    {
                                        readBooksList.map ((readBook) => (
                                            <tr className='read-books-display-table-details-container'>
                                                <td className='read-books-book-name'>{readBook.book}</td>
                                                <td className='read-books-author'>{readBook.author}</td> 
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        ) : <div className="no-read-books-message">You haven't read any books yet :/</div>
                    }

                </div>
                <div className='read-books-display-lower-border'></div>
            </div>
            
        </>
    )
}

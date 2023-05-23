import React, { useEffect, useState } from 'react'
import { getBooks } from '../../api/axios'

export default function BooksDisplay(props) {

    let [booksList, setBooksList] = useState([])
    useEffect(() => {getBooks(props).then((data) => {setBooksList(data)})}, [props])

    return (
        <>
        <div className='book-display-sec'>
            <table className='book-display-sec-table'>
                <thead>
                    <tr>
                        <th className='isbn'>ISBN</th>
                        <th className='bookname'>Book Name</th>
                        <th className='author'>Author</th>
                        <th className='genre'>Genre</th>
                        <th className='button'></th>
                    </tr>
                </thead>

                    {/* <div className=''> */}
                <tbody>
                {
                    booksList.length ? booksList.map((book) => (
                        // console.log('book is')
                            <tr className='book-display-body'>
                                <td className='isbn'>{book.isbn}</td>
                                <td className='bookname'>{book.name}</td>
                                <td className='author'>{book.author}</td>
                                <td className='genre'>{book.category}</td>
                                {
                                    book.availability ? (<td className='button'>
                                    <button onClick={()=>[props.setShowBookItem(true), console.log('1'), props.setBookDetail(book)]}>Issue Book</button>
                                    </td>)
                                    
                                    : <td className='button'>Available by {book.date}</td>
                                }
                                
                                
                            </tr>
                        )): 
                        <tr>
                            <td colSpan={5}>No Results</td>
                        </tr>
                    }
                </tbody>
                        {/* </div> */}
            </table>

        </div>
        </>

    )
}

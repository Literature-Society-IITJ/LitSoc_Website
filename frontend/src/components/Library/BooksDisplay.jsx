import React, { useEffect, useState } from 'react'
import { getBooks } from '../../api/axios'
import IssueCard from './IssueCard'

export default function BooksDisplay(props) {

    // let booksList = getBooks(props)
    
    let [showBookItem, setShowBookItem] = useState(false)
    let [bookDetail, setBookDetail] = useState(false)
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

                <tbody>
                {
                    booksList.length ? booksList.map((book) => (
                        // console.log('book is')
                        <tr className='book-display-body'>
                            <td className='isbn'>{book.isbn}</td>
                            <td className='bookname'>{book.name}</td>
                            <td className='author'>{book.author}</td>
                            <td className='genre'>{book.category}</td>
                            <td className='button'>
                                <div onClick={()=>[setShowBookItem(true), console.log('1'), setBookDetail(book)]}>Isuue</div>
                            </td>
                        </tr>
                        )): 
                        <tr>
                            <td colSpan={5}>No Results</td>
                        </tr>
                    }
                </tbody>

                {/* {
                booksList.length ?
                    <tbody>
                        {booksList.map((book) => (
                        
                            <tr>
                                <td>{book.isbn}</td>
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                                <td>{book.category}</td>
                            </tr>))}
                    </tbody>
                        : <div>No Book Found</div>
                    
                
                } */}
                


            </table>

        </div>
        <IssueCard showBookItem={showBookItem} 
                   setShowBookItem = {setShowBookItem}
                   bookDetail = {bookDetail}/>
        </>

    )
}

import React, { useEffect, useState } from 'react'
import { getBooks } from '../../api/axios'

export default function BooksDisplay(props) {

    let [initialBooksList, setInitialBooksList] = useState([])
    let [booksList, setBooksList] = useState(initialBooksList)

    useEffect(() => {getBooks(props).then((data) => {setInitialBooksList(data)
                                                    setBooksList(data)})}, [])
    // useEffect(() => {setBooksList(initialBooksList)}, [])

    // const initialBooksList = booksList.map((book) => book)

    // console.log(initialBooksList)
    // console.log(booksList)

    useEffect(() => {
        setBooksList(initialBooksList)
        setBooksList(initialBooksList.filter((book) => {
            console.log(props)
            console.log(props.bookNameInput), console.log(props.authorNameInput), console.log(props.genreInput), console.log(props.isbnInput)

            if (props.bookNameInput === '' & props.authorNameInput === '' & props.genreInput === '' & props.isbnInput === '') {
                return book
            }
            else if (props.bookNameInput === '' & props.authorNameInput === '' & props.genreInput === '') {
                return book.isbn.toString().toLowerCase().includes(props.isbnInput.toString().toLowerCase())
            }
            else if (props.bookNameInput === '' & props.authorNameInput === '' & props.isbnInput === '') {
                return book.category.toString().toLowerCase().includes(props.genreInput.toString().toLowerCase())
            }
            else if (props.bookNameInput === '' & props.genreInput === '' & props.isbnInput === '') {
                return book.author.toString().toLowerCase().includes(props.authorNameInput.toString().toLowerCase())
            }
            else if (props.authorNameInput === '' & props.genreInput === '' & props.isbnInput === '') {
                return book.name.toString().toLowerCase().includes(props.bookNameInput.toString().toLowerCase())
            }
            else if (props.bookNameInput === '' & props.authorNameInput === '') {
                return book.category.toString().toLowerCase().includes(props.genreInput.toString().toLowerCase()) & book.isbn.toString().toLowerCase().includes(props.isbnInput.toString().toLowerCase())
            }
            else if (props.bookNameInput === '' & props.genreInput === '') {
                return book.author.toString().toLowerCase().includes(props.authorNameInput.toString().toLowerCase()) & book.isbn.toString().toLowerCase().includes(props.isbnInput.toString().toLowerCase())
            }
            else if (props.bookNameInput === '' & props.isbnInput === '') {
                return book.author.toString().toLowerCase().includes(props.authorNameInput.toString().toLowerCase()) & book.category.toString().toLowerCase().includes(props.genreInput.toString().toLowerCase())
            }
            else if (props.authorNameInput === '' & props.genreInput === '') {
                return book.name.toString().toLowerCase().includes(props.bookNameInput.toString().toLowerCase()) & book.isbn.toString().toLowerCase().includes(props.isbnInput.toString().toLowerCase())
            }
            else if (props.authorNameInput === '' & props.isbnInput === '') {
                return book.name.toString().toLowerCase().includes(props.bookNameInput.toString().toLowerCase()) & book.category.toString().toLowerCase().includes(props.genreInput.toString().toLowerCase())
            }
            else if (props.genreInput === '' & props.isbnInput === '') {
                return book.name.toString().toLowerCase().includes(props.bookNameInput.toString().toLowerCase()) & book.author.toString().toLowerCase().includes(props.authorNameInput.toString().toLowerCase())
            }
            else if (props.bookNameInput === '') {
                return book.author.toString().toLowerCase().includes(props.authorNameInput.toString().toLowerCase()) & book.category.toString().toLowerCase().includes(props.genreInput.toString().toLowerCase()) & book.isbn.toString().toLowerCase().includes(props.isbnInput.toString().toLowerCase())
            }
            else if (props.authorNameInput === '') {
                return book.name.toString().toLowerCase().includes(props.bookNameInput.toString().toLowerCase()) & book.category.toString().toLowerCase().includes(props.genreInput.toString().toLowerCase()) & book.isbn.toString().toLowerCase().includes(props.isbnInput.toString().toLowerCase())
            }
            else if (props.genreInput === '') {
                return book.name.toString().toLowerCase().includes(props.bookNameInput.toString().toLowerCase()) & book.author.toString().toLowerCase().includes(props.authorNameInput.toString().toLowerCase()) & book.isbn.toString().toLowerCase().includes(props.isbnInput.toString().toLowerCase())
            }
            else if (props.isbnInput === '') {
                return book.name.toString().toLowerCase().includes(props.bookNameInput.toString().toLowerCase()) & book.author.toString().toLowerCase().includes(props.authorNameInput.toString().toLowerCase()) & book.category.toString().toLowerCase().includes(props.genreInput.toString().toLowerCase())
            }
            else {
                return book.name.toString().toLowerCase().includes(props.bookNameInput.toString().toLowerCase()) & book.author.toString().toLowerCase().includes(props.authorNameInput.toString().toLowerCase()) & book.category.toString().toLowerCase().includes(props.genreInput.toString().toLowerCase()) & book.isbn.toString().toLowerCase().includes(props.isbnInput.toString().toLowerCase())
            }
        }))
    }, [props.bookNameInput, props.authorNameInput, props.genreInput, props.isbnInput])

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

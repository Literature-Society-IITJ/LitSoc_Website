import React, { useEffect, useState } from 'react'
import { getBooks } from '../../api/axios'

export default function BooksDisplay(props) {

    // let booksList = getBooks(props)
    
    let [booksList, setBooksList] = useState([])

    useEffect(() => {getBooks(props).then((data) => {setBooksList(data)})}, [props.genreInput])

    return (
        <div>
            {
            booksList.length ? booksList.map((book) => (
                // console.log('book is')
                <div>{book.name}</div>
            )): <div>No Book Found</div> }
        </div>

    )
}

import React from 'react'
import { useState } from 'react'
import BookIssueSection from './BookIssueSection'

export default function LibraryMain() {
    let [bookNameInput, setBookNameInput] = useState('')
    let [authorNameInput, setAuthorNameInput] = useState('')
    let [genreInput, setGenreInput] = useState('')
    let [isbnInput, setIsbnInput] = useState('')
    
    return (
        <>
            <BookIssueSection />
        </>
    )
}

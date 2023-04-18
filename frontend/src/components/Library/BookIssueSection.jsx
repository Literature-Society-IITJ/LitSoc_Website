import React, {useState, useEffect} from 'react'
import LibrarySearchBar from './LibrarySearchBar'
import BooksDisplay from './BooksDisplay'
import { tokenExists } from '../../utilities/localStorage'
import IssueCard from './IssueCard'


export default function BookIssueSection(props) {


    let [showBookItem, setShowBookItem] = useState(false)
    let [bookDetail, setBookDetail] = useState(false)


    let [bookNameInput, setBookNameInput] = useState('')
    let [authorNameInput, setAuthorNameInput] = useState('')
    let [genreInput, setGenreInput] = useState('')
    let [isbnInput, setIsbnInput] = useState('')



    let loggedIn = tokenExists()
    // console.log(loggedIn)

    // console.log(bookNameInput)
    // console.log(authorNameInput)
    // console.log(genreInput)
    // console.log(isbnInput)

    // var bookNameInput = ((document.getElementById("cal_preview")||{}).value)||"";
    


    //////////////////////////////////////////////////////////////////
    // bookNameInput.onchange = useValue;
    // authorNameInput.onChange = useValue;
    // genreInput.onChange = useValue;
    // isbnInput.onChange = useValue;
    // // nameValidationInput.onblur = useValue;

    return (
        <div className='lib-book-issue-sec'>
            {
                loggedIn ? (
                    <div className='book-issue-sec-main'>
                        <LibrarySearchBar bookNameInput={bookNameInput} setBookNameInput={setBookNameInput} authorNameInput={authorNameInput} setAuthorNameInput={setAuthorNameInput} genreInput={genreInput} setGenreInput={setGenreInput} isbnInput={isbnInput} setIsbnInput={setIsbnInput}/>

                        <BooksDisplay 
                                        bookNameInput={bookNameInput} 
                                        setBookNameInput={setBookNameInput} 
                                        authorNameInput={authorNameInput} 
                                        setAuthorNameInput={setAuthorNameInput} 
                                        genreInput={genreInput} 
                                        setGenreInput={setGenreInput} 
                                        isbnInput={isbnInput} 
                                        setIsbnInput={setIsbnInput}
                                        setShowBookItem = {setShowBookItem}
                                        setBookDetail = {setBookDetail}

                                        />

                        <IssueCard
                                showBookItem = {showBookItem}
                                setShowBookItem = {setShowBookItem}
                                bookDetail = {bookDetail}/>
                    </div>) 
                    
                    : <div className='library-login-message'>LOGIN is required to access library. P.S.: Only IITJ peeps can create account.</div>
            }   
        </div>
    )
}

import React, {useState, useEffect} from 'react'
import LibrarySearchBar from './LibrarySearchBar'
import BooksDisplay from './BooksDisplay'

// var bookNameInput = '';
// var authorNameInput = '';
// var genreInput = '';
// var isbnInput = '';





export default function BookIssueSection(props) {

    let [bookNameInput, setBookNameInput] = useState('')
    let [authorNameInput, setAuthorNameInput] = useState('')
    let [genreInput, setGenreInput] = useState('')
    let [isbnInput, setIsbnInput] = useState('')

    

    console.log(bookNameInput)
    console.log(authorNameInput)
    console.log(genreInput)
    console.log(isbnInput)

    // var bookNameInput = ((document.getElementById("cal_preview")||{}).value)||"";
    


    //////////////////////////////////////////////////////////////////
    // bookNameInput.onchange = useValue;
    // authorNameInput.onChange = useValue;
    // genreInput.onChange = useValue;
    // isbnInput.onChange = useValue;
    // // nameValidationInput.onblur = useValue;

  return (
    <div className='lib-book-issue-sec'>
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
                        />
        </div>
    </div>
  )
}

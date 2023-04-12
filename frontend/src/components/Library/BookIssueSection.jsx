import React, {useState, useEffect} from 'react'

// var bookNameInput = '';
// var authorNameInput = '';
// var genreInput = '';
// var isbnInput = '';





export default function BookIssueSection(props) {

    // let [bookNameInput, setBookNameInput] = useState('')
    // let [authorNameInput, setAuthorNameInput] = useState('')
    // let [genreInput, setGenreInput] = useState('')
    // let [isbnInput, setIsbnInput] = useState('')

    

    // console.log(bookNameInput)
    // console.log(authorNameInput)
    // console.log(genreInput)
    // console.log(isbnInput)

    // var bookNameInput = ((document.getElementById("cal_preview")||{}).value)||"";
    function updateSearchValue(book) {
        console.log(book)
        if (book != null) {
            book = book.value;
        }
        else {
            book = '0;'
        }

        // book=book.value

        console.log(book)

        // return bookNameValue
    }


    //////////////////////////////////////////////////////////////////
    // bookNameInput.onchange = useValue;
    // authorNameInput.onChange = useValue;
    // genreInput.onChange = useValue;
    // isbnInput.onChange = useValue;
    // // nameValidationInput.onblur = useValue;

  return (
    <div className='lib-book-issue-sec'>
        <div className='book-issue-sec-main'>
            <div className='book-issue-search-bar'>
                <div className='lib-search-bar-containers book-name'>
                    <span>Book Name:</span>
                    {/* <input type="text" name="name" id="search-book-name" onChange={()=> setBookNameInput(document.getElementById("search-book-name").value)}/> */}
                    {/* {console.log(document.getElementById("search-book-name").value)} */}
                    <input type="text" name="name" id="search-book-name" onChange={() => updateSearchValue(document.getElementById("search-book-name"))} />
                    
                </div>
                
                <div className='lib-search-bar-containers isbn'>
                    <span>ISBN:</span>
                    <input type="text" name="name" id="search-isbn" onChange={()=> setIsbnInput(document.getElementById("search-isbn").value)}/>
                </div>

                <div className='lib-search-bar-containers author-name'>
                    <span>Author:</span>
                    <input type="text" name="name" id="search-author-name" onChange={()=> setAuthorNameInput(document.getElementById("search-author-name").value)}/>
                </div>

                <div className='lib-search-bar-containers genre'>
                    <span>Genre:</span>
                    <input type="text" name="name" id="search-genre" onChange={()=> setGenreInput(document.getElementById("search-genre").value)}/>
                </div>                
            </div>
        </div>
    </div>
  )
}

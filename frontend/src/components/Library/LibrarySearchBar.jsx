import React from 'react'

export default function LibrarySearchBar(props) {

    // function updateSearchValue(book) {
    //     console.log(book)
    //     if (book != null) {
    //         book = book.value;
    //     }
    //     else {
    //         book = '0;'
    //     }
    
    //     // book=book.value
    
    //     console.log(book)
    
    //     // return bookNameValue
    // }

    return (
        <div className='book-issue-search-bar'>
                <div className='lib-search-bar-containers book-name'>
                    <span>Book Name:</span>
                    <input type="text" name="name" id="search-book-name" onChange={()=> props.setBookNameInput(document.getElementById("search-book-name").value)}/>
                    {/* {console.log(document.getElementById("search-book-name").value)} */}
                    {/* <input type="text" name="name" id="search-book-name" onChange={() => updateSearchValue(document.getElementById("search-book-name"))} /> */}
                    
                </div>
                
                <div className='lib-search-bar-containers isbn'>
                    <span>ISBN:</span>
                    <input type="text" name="name" id="search-isbn" onChange={()=> props.setIsbnInput(document.getElementById("search-isbn").value)}/>
                </div>

                <div className='lib-search-bar-containers author-name'>
                    <span>Author:</span>
                    <input type="text" name="name" id="search-author-name" onChange={()=> props.setAuthorNameInput(document.getElementById("search-author-name").value)}/>
                </div>

                <div className='lib-search-bar-containers genre'>
                    <span>Genre:</span>
                    <input type="text" name="name" id="search-genre" onChange={()=> props.setGenreInput(document.getElementById("search-genre").value)}/>
                </div>                
            </div>
    )
}

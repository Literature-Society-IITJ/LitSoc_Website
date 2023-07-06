import React from 'react'

export default function LibrarySearchBar(props) {


    return (
        <div className='book-issue-search-bar'>
            <div className='lib-search-bar-containers search-book-name'>
                <span>Book Name:</span>
                <input type="text" name="name" id="search-book-name" onChange={()=> props.setBookNameInput(document.getElementById("search-book-name").value)}/>
            </div>
            
            <div className='lib-search-bar-containers search-isbn'>
                <span>ISBN:</span>
                <input type="text" name="name" id="search-isbn" onChange={()=> props.setIsbnInput(document.getElementById("search-isbn").value)}/>
            </div>

            <div className='lib-search-bar-containers search-author-name'>
                <span>Author:</span>
                <input type="text" name="name" id="search-author-name" onChange={()=> props.setAuthorNameInput(document.getElementById("search-author-name").value)}/>
            </div>

            <div className='lib-search-bar-containers search-genre'>
                <span>Genre:</span>
                <input type="text" name="name" id="search-genre" onChange={()=> props.setGenreInput(document.getElementById("search-genre").value)}/>
            </div>                
        </div>
    )
}

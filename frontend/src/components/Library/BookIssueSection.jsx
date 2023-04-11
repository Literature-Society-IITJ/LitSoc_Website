import React from 'react'

export default function BookIssueSection() {
  return (
    <div className='lib-book-issue-sec'>
        <div className='book-issue-sec-main'>
            <div className='book-issue-search-bar'>
                <div className='lib-search-bar-containers book-name'>
                    <span>Book Name:</span>
                    <input type="text" name="name" id="book-name" />
                </div>
                
                <div className='lib-search-bar-containers isbn'>
                    <span>ISBN:</span>
                    <input type="text" name="name" id="book-name" />
                </div>

                <div className='lib-search-bar-containers author-name'>
                    <span>Author:</span>
                    <input type="text" name="name" id="book-name" />
                </div>

                <div className='lib-search-bar-containers genre'>
                    <span>Genre:</span>
                    <input type="text" name="name" id="book-name" />
                </div>                
            </div>
        </div>
    </div>
  )
}

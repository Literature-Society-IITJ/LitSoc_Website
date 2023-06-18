import React, { useState } from 'react'
import AdminRequestCard from './AdminRequestCard'
import ContentUploadForm from './ContentUploadForm'
import ItemCard from '../ReaderSection/ItemCard'
import ItemMain from '../ReaderSection/ItemMain'
import { RxCross2 } from 'react-icons/rx'


export default function ProfileDataCard(props) {

    // const bookData = props.bookDetails
    let userData = props.userData
    let bookDetails = userData.book
    let uploadedContent = userData.content

    let [showContentUploadForm, setShowContentUploadForm] = useState(false)
    let [showUploadedContent, setShowUploadedContent] = useState(false)

    let [showItem, setShowItem] = useState(false)
    let [details, setDetails] = useState('')

    return (
        <div className='profile-page general-data-card'>
            <div className='general-data-card-books-info'>
                <div className='issuedbook-header'>
                    Issued Book:
                </div>
                {
                    true ? (
                        <>
                            <div className='issuedbook-name'>
                                {/* {bookData.book_name.name} */}
                            </div>
                            <div>
                                Return Date: 
                            </div>
                        </>
                    ) : <div>No book issued.</div>
                }
            </div>

            <div className='general-data-card-content-info'>
                <button onClick={() => setShowUploadedContent(true)}>Uploaded Content</button>
                {/* <br /> */}
                <button onClick={() => setShowContentUploadForm(true)}>Upload Content</button>
            </div>

            {
                (showContentUploadForm) ? (
                    <ContentUploadForm setShowContentUploadForm={setShowContentUploadForm} username={userData.member_details.username} />
                ) : null
            }


            {
                (showUploadedContent) ? (
                    <div className='admin-action-modal'>
                        <div className='admin-action-card issue-requests-card'>
                            <div className='admin-action-card-upperbar'>
                                <div>Reader Section Content Upload Section</div>
                                <div className='admin-action-card-x-button' onClick={()=>setShowUploadedContent(false)}>
                                    <RxCross2 />
                                </div>
                            </div>

                            <div className='profile-uploaded-content content-display-section'>
                                {
                                uploadedContent.length ? (
                                    uploadedContent.map((item) =>(
                                        <div onClick={() => {setShowItem(true)
                                            setDetails(item)}}>
                                            <ItemCard title={item.title} content={item.content} author={item.member_name} img={item.background} isAdmin={false} category={item.category}/>
                                        </div>
                                        ))
                                    ):
                                    <div className='reader-sec-contents no-content-message'>
                                        {
                                            (onDisplayCategory) ? 
                                                'Alas! There is no content in this category right now!!!' :                                 
                                                'Please select a category!'
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                        <ItemMain showItem={showItem} setShowItem={setShowItem} title={details.title} content={details.content} author='dgf' img={'src/media/' + details.background} isAdmin={false} category={details.category}/>
                    </div>
                ) : null
            }
            
        </div>
    )
}

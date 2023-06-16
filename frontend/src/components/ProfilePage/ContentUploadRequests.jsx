import React, {useState, useEffect} from 'react'
import { RxCross2 } from 'react-icons/rx'
import { contentUploadRequestResponse, getContentUploadRequests, modBookResponse } from '../../api/axios'
import ItemMain from '../ReaderSection/ItemMain'

export default function ContentUploadRequests(props) {

    let [refresh, setRefresh] = useState(false)

    let [showItem, setShowItem] = useState(false)
    let [details, setDetails] = useState('')

    const [contentUploadRequestList, setContentUploadRequestList] = useState([])

    useEffect(() => {
        getContentUploadRequests().then((data) => {setContentUploadRequestList(data)})
        setRefresh(false)}
        , [refresh])


    return (
        <div className='admin-action-modal'>
            <div className='admin-action-card issue-requests-card'>
                <div className='admin-action-card-upperbar'>
                    <div>Reader Section Content Upload Section</div>
                    <div className='admin-action-card-x-button' onClick={()=>props.setShowContentUploadRequests(false)}>
                        <RxCross2 />
                    </div>
                </div>

                <div className='admin-action-card-search-bar issue-requests-search-bar'>
                    <div className='admin-action-card-search-bar-container issue-requests-search-roll-num'>
                        <span>Roll Number:</span>
                        <input type="text" name="name" id="issue-requests-search-roll-num" onChange={()=>setRollNumberInput(document.getElementById("issue-requests-search-roll-num").value)}/>
                    </div>
                </div>

                <div className='admin-action-card-body admin-section-table-display-section'>
                    {
                        (contentUploadRequestList.length) ? (
                            <table className='admin-section-table'>
                                <thead className='admin-section-table-headers-container'>
                                    <tr>
                                        <th className='admin-section-table-headers issue-requests-book-id'>Author Name</th>
                                        <th className='admin-section-table-headers issue-requests-borrower-details'>Title</th>
                                        <th className='admin-section-table-headers issue-requests-return-date'>Category</th>
                                        <th className='admin-section-table-headers issue-requests-approve-button'></th>
                                        <th className='admin-section-table-headers issue-requests-reject-button'></th>
                                    </tr>
                                </thead>

                                <tbody className='admin-section-table-body'>
                                    {
                                        contentUploadRequestList.map ((issueRequest) => (
                                            <>

                                            <tr className='admin-section-table-details-container'>
                                                
                                                <td className='issue-requests-book-id'
                                                    onClick={() => {setShowItem(true)
                                                    setDetails(issueRequest)}}
                                                >
                                                    <div className='issue-requests-book-details-name'>
                                                        <div>
                                                            {issueRequest.title}
                                                        </div>
                                                        <div >
                                                            {issueRequest.title}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='issue-requests-borrower-details'>
                                                    <div className='issue-requests-borrower-details-name'>
                                                        <div>
                                                            {issueRequest.category}
                                                        </div>
                                                        <div className='issue-requests-borrower-roll-number'>
                                                            {issueRequest.category}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='issue-requests-return-date'>{issueRequest.category}</td>
                                                <td className='issue-requests-approve-button'>
                                                    <button onClick={()=>{
                                                        contentUploadRequestResponse(issueRequest.title, issueRequest.member_id, issueRequest.category, 'approved')
                                                        setRefresh(true)}}>
                                                    Approve</button>
                                                </td> 
                                                <td className='issue-requests-reject-button'>
                                                    <button onClick={()=>{
                                                        contentUploadRequestResponse(issueRequest.title, issueRequest.member_id, issueRequest.category, 'rejected')
                                                        setRefresh(true)}}>
                                                    Reject</button>
                                                </td> 
                                            </tr>
                                            </>
                                        ))
                                    }
                                </tbody>
                            </table>
                        ) : <div className="no-issue-requests-message">No Content Upload Requests Right Now. Enjoy your time :o</div>
                    }
                </div>
                <div className='admin-action-lower-border'></div>

            </div>
            <ItemMain showItem={showItem} setShowItem={setShowItem} title={details.title} content={details.content} author='dgf' img={'src/media/' + details.background} isAdmin={false} category={details.category}/>
        </div>
    )
}

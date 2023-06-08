import React, {useState, useEffect} from 'react'
import { RxCross2 } from 'react-icons/rx'
import { getIssueRequests, modBookResponse } from '../../api/axios'

export default function BookRequestsSection(props) {

    let [refresh, setRefresh] = useState(false)

    const [issueRequestList, setIssueRequestList] = useState([])

    useEffect(() => {
        getIssueRequests().then((data) => {setIssueRequestList(data)})
        setRefresh(false)}
        , [refresh])


    return (
        <div className='admin-action-modal'>
            <div className='admin-action-card moderator-requests-card'>
                <div className='admin-action-card-upperbar'>
                    <div>Issued Books Details</div>
                    <div className='admin-action-card-x-button' onClick={()=>props.setShowBookRequests(false)}>
                        <RxCross2 />
                    </div>
                </div>

                <div className='admin-action-card-body new-moderator-section'>
                    <div className="new-moderator-input-button-section">
                        <div className='new-mod-sec-input-container'>
                            <div className='new-mod-sec-fixed-label'>Roll Number :</div>
                            <input className='new-mod-sec-input-label' type="text" id='roll-number'></input>
                        </div>
                        <button className='new-mod-sec-addmod-button'>
                            Add Moderator
                        </button>
                    </div>
                </div>

                <div className='admin-action-card-body admin-section-table-display-section'>
                    {
                        (issueRequestList.length) ? (
                            <table className='admin-section-table'>
                                <thead className='admin-section-table-headers-container'>
                                    <tr>
                                        <th className='admin-section-table-headers issue-requests-book-id'>Book Details</th>
                                        <th className='admin-section-table-headers issue-requests-borrower-details'>BORROWER DETAILS</th>
                                        <th className='admin-section-table-headers issue-requests-return-date'>Expected Return Date</th>
                                        <th className='admin-section-table-headers issue-requests-approve-button'></th>
                                        <th className='admin-section-table-headers issue-requests-reject-button'></th>
                                    </tr>
                                </thead>

                                <tbody className='admin-section-table-body'>
                                    {
                                        issueRequestList.map ((issueRequest) => (
                                            <tr className='admin-section-table-details-container'>
                                                <td className='issue-requests-book-id'>
                                                    <div className='issue-requests-book-details-name'>
                                                        <div>
                                                            {issueRequest.book_info.name}
                                                        </div>
                                                        <div >
                                                            {issueRequest.book_info.book_id}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='issue-requests-borrower-details'>
                                                    <div className='issue-requests-borrower-details-name'>
                                                        <div>
                                                            {issueRequest.member_info.name}
                                                        </div>
                                                        <div className='issue-requests-borrower-roll-number'>
                                                            {issueRequest.member_info.roll_number}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='issue-requests-return-date'>{issueRequest.return_date.split(' ')[0]}</td>
                                                <td className='issue-requests-approve-button'>
                                                    <button onClick={()=>{
                                                        modBookResponse(issueRequest.book_id, issueRequest.member_info.roll_number, 'approved')
                                                        setRefresh(true)}}>
                                                    Issue Book</button>
                                                </td> 
                                                <td className='issue-requests-reject-button'>
                                                    <button onClick={()=>{
                                                        modBookResponse(issueRequest.book_id, issueRequest.member_info.roll_number, 'rejected')
                                                        setRefresh(true)}}>
                                                    Reject</button>
                                                </td> 
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        ) : <div className="no-issue-requests-message">No Issue Requests to be Reviewed. Enjoy your time :o</div>
                    }
                </div>
                <div className='admin-action-lower-border'></div>
            </div>
        </div>
    )
}

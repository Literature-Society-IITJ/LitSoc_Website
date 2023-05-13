import React, {useState, useEffect} from 'react'
import { getIssueRequests, modBookResponse } from '../../api/axios'

export default function BookRequestsSection() {

    // let [issueRequestList, setBooksList] = useState([])
    const [issueRequestList, setIssueRequestList] = useState([])
    // let load_again = 1
    // const [load_again, setload_again] = useState(true)

    useEffect(() => {
        getIssueRequests().then((data) => {setIssueRequestList(data)})}
        , [])


    return (
        <div className='requests-section book-issue-sec'>
            <div className='requests-section-head book-issue-requests'>
                <h2>
                Book Issue Requests
                </h2></div>
            <div className='issue-requests-table-container'>
                <table className='ssue-requests-table'>
                    {/* <thead>
                        <tr>
                            <th className='isbn'>ISBN</th>
                            <th className='bookname'>Book Name</th>
                            <th className='author'>Author</th>
                            <th className='genre'>Genre</th>
                            <th className='button'></th>
                        </tr>
                    </thead> */}

                    <tbody>
                    {
                        issueRequestList.length ? issueRequestList.map((issueRequest) => (
                            
                                <tr className='book-display-body'>
                                    <td className='isbn'>{ issueRequest.book_info.isbn }</td>
                                    <td className='bookname'>{ issueRequest.book_info.name }</td>
                                    <td>{ issueRequest.member_info.name }</td>
                                    <td>{ issueRequest.member_info.roll_number }</td>
                                    
                                    <td className='button'>
                                        <button onClick={()=>{
                                            modBookResponse(issueRequest.book_id, issueRequest.member_info.roll_number, 'approved')
                                            // let i = load_again+1
                                            // setload_again(!load_again)
                                            // console.log(load_again)
                                            location.reload()
                                            }}>Isuue Book</button>
                                        {/* <br /> */}
                                        <button onClick={()=>{
                                            modBookResponse(issueRequest.book_id, issueRequest.member_info.roll_number, 'rejected')
                                            // setload_again(!load_again)
                                            location.reload()
                                            }}>Reject</button>
                                    </td>
                                        
                                    
                                    
                                    
                                </tr>
                            )
                            ): 
                            <tr>
                                <td colSpan={5}>No Issue Requests</td>
                            </tr>
                            }
                        {/* } */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

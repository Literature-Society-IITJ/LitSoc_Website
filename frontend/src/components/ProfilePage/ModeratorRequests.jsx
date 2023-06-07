import React, { useState, useEffect } from 'react'
import { addModerator, getModerators, removeModerator } from '../../api/axios'
import { RxCross2 } from 'react-icons/rx'



export default function ModeratorRequests(props) {

    let [moderators, setModerators] = useState([])
    useEffect(() => {getModerators().then((data) => {setModerators(data)})}, [])

    console.log('moderators')
    console.log(moderators)

    return (
        <div className='admin-action-modal'>
            <div className='admin-action-card moderator-requests-card'>
                <div className='admin-action-card-upperbar'>
                    <div>Moderator Details</div>
                    <div className='admin-action-card-x-button' onClick={()=>props.setShowModeratorDetails(false)}>
                        <RxCross2 />
                    </div>
                </div>

                <div className='admin-action-card-body new-moderator-section'>
                    <div className='new-mod-sec-input-container'>
                        <div className='new-mod-sec-fixed-label'>Roll Number :</div>
                        <input className='new-mod-sec-input-label' type="text" id='roll-number'></input>
                    </div>
                    <button className='new-mod-sec-addmod-button' onClick={()=>{addModerator(document.getElementById('roll-number').value)}}>
                        Add Moderator
                    </button>
                </div>
    
                <div className='admin-action-card-body moderators-display-section'>
                    {
                        (moderators.length) ? (
                            <table className='moderators-table'>
                                <thead>
                                    <tr>
                                        <th className='name'>Name</th>
                                        <th className='email-id'>Email Id</th>
                                        <th className='phone-num'>Phone No.</th>
                                        <th className='button'></th>
                                    </tr>
                                </thead>

                                {
                                    moderators.map ((moderator) => (
                                        <tr>
                                            <td>
                                                <div>
                                                    {moderator.first_name + ' ' + moderator.last_name}
                                                </div>
                                                <div>
                                                    {moderator.roll_number}
                                                </div>
                                            </td>
                                            <td>{moderator.email}</td>
                                            <td>{moderator.phone}</td>
                                            <td>
                                                <button onClick={()=>{removeModerator(moderator.roll_number)}}>Remove</button>
                                            </td>
                                        </tr>
                                    ))
                                }

{/* {
                                    moderators.map ((moderator) => (
                                        <tr>
                                            <td>
                                                <div>
                                                    {moderator.first_name + ' ' + moderator.last_name}
                                                </div>
                                                <div>
                                                    {moderator.roll_number}
                                                </div>
                                            </td>
                                            <td>{moderator.email}</td>
                                            <td>{moderator.phone}</td>
                                            <td>
                                                <button>Remove</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                                {
                                    moderators.map ((moderator) => (
                                        <tr>
                                            <td>
                                                <div>
                                                    {moderator.first_name + ' ' + moderator.last_name}
                                                </div>
                                                <div>
                                                    {moderator.roll_number}
                                                </div>
                                            </td>
                                            <td>{moderator.email}</td>
                                            <td>{moderator.phone}</td>
                                            <td>
                                                <button>Remove</button>
                                            </td>
                                        </tr>
                                    ))
                                } */}

                            </table>
                        ) : null
                    }
                </div>
            </div>
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import { addModerator, getModerators, removeModerator } from '../../api/axios'
import { RxCross2 } from 'react-icons/rx'



export default function ModeratorRequests(props) {

    let [refresh, setRefresh] = useState(false)
    
    let [errorMessage, setErrorMessage] = useState('')

    let [moderators, setModerators] = useState([])
    useEffect(() => {
        getModerators().then((data) => {setModerators(data)})
        setRefresh(false)}
        , [refresh])
    

    const addModFunction = () => {
        var modRollNoElement = document.getElementById("roll-number")
        
        addModerator(modRollNoElement.value)
        .then((response) => {
            modRollNoElement.value = ""
        })
        .catch((error) => {
            setErrorMessage(error.response.data)
        })
        
        
        setRefresh(true)
    }
    

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
                    <div className="new-moderator-input-button-section">
                        <div className='new-mod-sec-input-container'>
                            <div className='new-mod-sec-fixed-label'>Roll Number :</div>
                            <input className='new-mod-sec-input-label' type="text" id='roll-number'></input>
                        </div>
                        <button className='new-mod-sec-addmod-button' onClick={addModFunction}>
                            Add Moderator
                        </button>
                    </div>
                    <div className='new-mod-sec-error-message'>{errorMessage}</div>
                </div>
    
                <div className='admin-action-card-body admin-section-table-display-section'>
                    {
                        (moderators.length) ? (
                            <table className='admin-section-table'>
                                <thead className='admin-section-table-headers-container'>
                                    <tr>
                                        <th className='admin-section-table-headers mod-name'>Name</th>
                                        <th className='admin-section-table-headers mod-email-id'>Email Id</th>
                                        <th className='admin-section-table-headers mod-phone-num'>Phone No.</th>
                                        <th className='admin-section-table-headers mod-remove-button'></th>
                                    </tr>
                                </thead>

                                <tbody className='moderators-table-body'>
                                    {
                                        moderators.map ((moderator) => (
                                            <tr className='admin-section-table-details-container'>
                                                <td className='mod-name'>
                                                    <div className='moderator-details-name'>
                                                        <div>
                                                            {moderator.first_name + ' ' + moderator.last_name}
                                                        </div>
                                                        <div className='mod-roll-number'>
                                                            {moderator.roll_number}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='mod-email-id'>{moderator.email}</td>
                                                <td className='mod-phone-num'>{moderator.phone}</td>
                                                <td className='mod-remove-button'>
                                                    <button onClick={()=>{
                                                        removeModerator(moderator.roll_number)
                                                        setRefresh(true)
                                                        }}>Remove</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        ) : <div className="no-moderator-message">You do not have any moderators at present. Please add new moderators!</div>
                    }
                </div>
                <div className='admin-action-lower-border'></div>
            </div>
        </div>
    )
}

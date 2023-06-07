import React, { useState, useEffect } from 'react'
import { addModerator, getModerators, removeModerator } from '../../api/axios'
import { RxCross2 } from 'react-icons/rx'



export default function ModeratorRequests(props) {

    let [refresh, setRefresh] = useState(false)

    let [moderators, setModerators] = useState([])
    useEffect(() => {
        getModerators().then((data) => {setModerators(data)})
        setRefresh(false)}, [refresh])
    
    console.log('moderators')
    console.log(moderators)
    
    const addModFunction = () => {
        console.log(111111111111)
        var modRollNoElement = document.getElementById("roll-number")
        
        addModerator(modRollNoElement.value)
        modRollNoElement.value = ""
        
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
                    <div className='new-mod-sec-input-container'>
                        <div className='new-mod-sec-fixed-label'>Roll Number :</div>
                        <input className='new-mod-sec-input-label' type="text" id='roll-number'></input>
                    </div>
                    <button className='new-mod-sec-addmod-button' onClick={addModFunction}>
                        Add Moderator
                    </button>
                </div>
    
                <div className='admin-action-card-body moderators-display-section'>
                    {
                        (moderators.length) ? (
                            <table className='moderators-table'>
                                <thead className='moderators-table-headers-container'>
                                    <tr>
                                        <th className='moderators-table-headers name'>Name</th>
                                        <th className='moderators-table-headers email-id'>Email Id</th>
                                        <th className='moderators-table-headers phone-num'>Phone No.</th>
                                        <th className='moderators-table-headers remove-button'></th>
                                    </tr>
                                </thead>

                                <tbody className='moderators-table-body'>
                                    {
                                        moderators.map ((moderator) => (
                                            <tr className='moderators-table-details-container'>
                                                <td className='name'>
                                                    <div className='moderator-details-name'>
                                                        <div>
                                                            {moderator.first_name + ' ' + moderator.last_name}
                                                        </div>
                                                        <div>
                                                            {moderator.roll_number}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='email-id'>{moderator.email}</td>
                                                <td className='phone-num'>{moderator.phone}</td>
                                                <td className='remove-button'>
                                                    <button onClick={()=>{
                                                        removeModerator(moderator.roll_number)
                                                        setRefresh(true)}}>Remove</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        ) : <div className="no-moderator-message">You do not have any moderators at present. Please add new moderators!</div>
                    }
                </div>
                <div className='moderator-section-lower-border'></div>
            </div>
        </div>
    )
}

import React from 'react'
import { addModerator } from '../../api/axios'
import { RxCross2 } from 'react-icons/rx'



export default function ModeratorRequests(props) {
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
                        <div className='new-mod-sec-fixed-label'>Roll Number:</div>
                        <input className='new-mod-sec-input-label' type="text" id='roll-number'></input>
                    </div>
                    <button onClick={()=>{addModerator(document.getElementById('roll-number').value)}}>
                        Make Moderator
                    </button>
                </div>
    
                <div className='admin-action-card-body'>
                </div>
            </div>
        </div>
    )
}

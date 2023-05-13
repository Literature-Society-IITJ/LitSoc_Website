import React from 'react'
import { addModerator } from '../../api/axios'



export default function ModeratorRequests() {
    return (
        <div>
            <div>
                <h2>
                    Moderator Requests
                </h2>
            </div>
            <br />

            <div>
                <div>
                    <div>Roll Number</div>
                    <input type="text" id='roll-number'></input>
                </div>
                <br />
                <button onClick={()=>{addModerator(document.getElementById('roll-number').value)
                // location.reload()
                }}>
                    Add
                </button>
            </div>
        </div>
    )
}

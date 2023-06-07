import React from 'react'
import { RxPlus } from "react-icons/rx"

export default function AdminRequestCard(props) {
    return (
        <div className='admin-requests-card' onClick={()=>props.setShowSection(true)}>
            <div>{props.title}</div>
            <div className='admin-requests-card-plus-sign'>
                <RxPlus />
            </div>
        </div>
    )
}

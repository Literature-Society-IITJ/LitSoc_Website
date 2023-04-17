import React from 'react'

export default function IssueCard(props) {

    let currentIssued = False

    return (
        {
            props.showBookItem ? (
                <div>
                    {
                        currentIssued ? (
                            <div></div>
                        )
                    }
                </div>) : 
        }
    )
}

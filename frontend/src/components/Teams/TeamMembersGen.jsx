import React from 'react'
import { currentTeam, alumni2021, teamNameObjectMap } from '../../data/Teams'
import ProfileCard from './ProfileCard'

export default function TeamMembersGen(props) {

    let onDisplay = props.displayTeam
    let onDisplayObject = teamNameObjectMap[onDisplay]

    return (
        <div className='team-members-container' id='current-team'>
        {
            onDisplayObject.map((item) =>(
                <div className='team-members-por-container' id={item.id}>
                    <div className='members-por-fixed-label'>{item.title}</div>
                    <div className='members-por-cards-container'>
                    {
                        item.members.map((member) =>(
                        <ProfileCard name={member.name} quote={member.quote} linkedin={member.linkedIn_link} insta={member.insta_link} mail={member.mailto} />
                        ))
                    }
                    </div>
                </div>
            ))
        }
        </div>
    )
}
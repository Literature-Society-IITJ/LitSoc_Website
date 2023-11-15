import React, { useEffect, useState } from 'react'
import MemberCard from './MemberCard'
import { getTeamDetails } from '../../api/axios'

export default function TeamMembersGen(props) {

    
    let onDisplay = props.displayTeam
    let [onDisplayObject, setOnDisplayObject] = useState([])

    useEffect(() => {getTeamDetails(onDisplay).then((data) => {setOnDisplayObject(data)})}, [onDisplay])

    return (
        <div className='team-members-container'>
            {
                onDisplayObject.map((item) => (
                    <div className='team-member-por-row'>
                        {
                            item.members.map((member) => (
                                <MemberCard name={member.name} por={item.title} quote={member.quote} linkedin={member.linkedin} insta={member.instagram} mail={member.instagram} image={member.image} id={item.id}/>
                            ))
                        }
                    </div>                 
                ))
            }
        </div>
    )
}

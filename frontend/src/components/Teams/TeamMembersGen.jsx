import React, { useEffect, useState } from 'react'
import { currentTeam, alumni2021, teamNameObjectMap } from '../../data/Teams'
import MemberCard from './MemberCard'
import getQuotes, { getTeamDetails } from '../../api/axios'

export default function TeamMembersGen(props) {

    
    let onDisplay = props.displayTeam
    console.log(getTeamDetails(onDisplay))
    // let onDisplayObject = teamNameObjectMap[onDisplay]
    // let onDisplayObject = getTeamDetails(onDisplay).then(data)
    // console.log('5')
    // console.log(typeof onDisplayObject)
    // console.log(onDisplayObject)
    let [onDisplayObject, setOnDisplayObject] = useState([])
    useEffect(() => {getTeamDetails(onDisplay).then((data) => {setOnDisplayObject(data)})}, [onDisplay])

    return (
        <div className='team-members-container' id='current-team'>
        {console.log(onDisplayObject)}{
            onDisplayObject.map((item) =>(
                <div className='team-members-por-container' id={item.id}>
                    <div className='members-por-fixed-label'>{item.title}</div>
                    <div className='members-por-cards-container'>
                    {
                        item.members.map((member) => (
                        <MemberCard name={member.name} quote={member.quote} linkedin={member.linkedin} insta={member.instagram} mail={member.instagram} image={member.image} id={item.id}/>
                        ))
                    }
                    </div>
                </div>
            ))
        }
        </div>
    )
}

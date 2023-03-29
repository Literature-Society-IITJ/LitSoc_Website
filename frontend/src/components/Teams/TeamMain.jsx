import React from 'react'
import { useState } from 'react'
import ProfileCard from './ProfileCard'
import {currentTeam, teamsNavPanelItems} from '../../data/Teams'
import TeamMembersGen from './TeamMembersGen'

export default function TeamMain() {

    let [displayTeam, setDisplayTeam] = useState('current')

    return (
        <div className='teams-main-body'>
            <div className='teams-nav-panel'>
            {
                teamsNavPanelItems.map((items) =>(
                    <div className='teams-nav-panel-items'>
                        {/* <button onClick={()=>setDisplayTeam('current')}> */}
                            {items.title}
                            <ul className='teams-nav-drop-down-ul'>
                                {
                                    items.dropdown.map((item) =>(
                                        <button key= {item.id}className="teams-nav-dropdown-items" tabIndex={item.index} onClick={()=>setDisplayTeam(item.year)}>
                                            {item.year}
                                        </button>
                                    ))
                                }
                            </ul>
                        {/* </button>  */}
                    </div>
                    // <NavbarDropdownMenu key={item.title} title={item.title} path={item.path} items={item.dropdown} />
                ))
            }
            </div>

            <TeamMembersGen displayTeam={displayTeam} />

            {/* <div className='team-members-container' id='current-team'>
            {
                team_2022.map((item) =>(
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
            </div> */}

            {/* <Profi
            leCard /> */}
        </div>
    )
}

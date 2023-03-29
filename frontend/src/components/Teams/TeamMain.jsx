import React from 'react'
import { useState } from 'react'
import {teamsNavPanelItems} from '../../data/Teams'
import TeamMembersGen from './TeamMembersGen'

export default function TeamMain() {

    let [displayTeam, setDisplayTeam] = useState('current')
    let Team = teamsNavPanelItems["Team"]
    let Alumni = teamsNavPanelItems["alumni"]

    return (
        <div className='teams-main-body'>
            <div className='teams-nav-panel'>
                <div className='teams-nav-panel-items'>
                    <button onClick={()=>setDisplayTeam('current')}>
                        {Team.title}
                    </button>
                </div>

                <div className='teams-nav-panel-items'>
                    {Alumni.title}
                    <ul className='teams-nav-drop-down-ul'>
                        {
                            Alumni.dropdown.map((item) =>(
                                <button key= {item.id}className="teams-nav-dropdown-items" tabIndex={item.index} onClick={()=>setDisplayTeam(item.year)}>
                                    {item.year}
                                </button>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <TeamMembersGen displayTeam={displayTeam} />
        </div>
    )
}

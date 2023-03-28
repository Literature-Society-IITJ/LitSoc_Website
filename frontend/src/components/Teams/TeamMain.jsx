import React from 'react'
import ProfileCard from './ProfileCard'
import {team_2022, teamsNavPanelItems} from '../../data/Teams'
import NavbarDropdownMenu from '../Navbar/NavbarDropdownMenu';

export default function TeamMain() {
  return (
    <div className='teams-main-body'>
        <div className='teams-nav-panel'>
        {
            teamsNavPanelItems.map((item) =>(
                <a className='teams-nav-panel-items' href={item.path} >{item.title}
                    <ul className='teams-nav-drop-down-ul'>
                        {
                            item.dropdown.map((i) =>(
                                <a key={i.title} href={i.path} className="teams-nav-dropdown-items" tabIndex={i.index}>
                                    {i.title}
                                </a>
                            ))
                        }
                    </ul>
                </a>
                // <NavbarDropdownMenu key={item.title} title={item.title} path={item.path} items={item.dropdown} />
            ))
        }
        </div>

        <div className='team-members-container' id='current-team'>
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
        </div>

        {/* <Profi
        leCard /> */}
    </div>
  )
}

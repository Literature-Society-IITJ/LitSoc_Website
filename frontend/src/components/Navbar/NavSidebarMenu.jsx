import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'


export default function NavSidebarMenu(props) {

    let title = props.title
    let items = props.items
    let path = props.path

    return (
        (items.length === 0) ? (
            <a className='nav-side-bar-list-items' href={path} >{title}
            </a>
        ) : 
        (
            <div className='nav-side-bar-list-items' onClick={() => {
                props.setNavSidebarList(items)
                props.setNavSidebarCrossIcon(false)
            }}>
                <div>
                    {title}
                </div>
                <RiArrowRightSLine className='nav-panel-drop-down-arrow-icon'/>
            </div>
        )
    )
}
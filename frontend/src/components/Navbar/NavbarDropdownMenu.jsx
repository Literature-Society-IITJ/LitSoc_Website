import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'


export default function NavbarDropdownMenu(props) {

    let title = props.title
    let items = props.items
    let path = props.path

    return (
        (items.length === 0) ? (
            <a className='nav-panel-items' href={path} >{title}
            </a>
        ) : 
        (
            <div className='nav-panel-items'>
                <div>
                    {title}
                </div>
                <RiArrowDownSLine className='nav-panel-drop-down-arrow-icon'/>

                <ul className='nav-drop-down-ul'>
                    {
                        items.map((item) =>(
                            <a key={item.title} href={item.path} className="nav-panel-clubs-items" tabIndex={item.index}>
                                {item.title}
                            </a>
                        ))
                    }
                </ul>
            </div>
        )
    )
}

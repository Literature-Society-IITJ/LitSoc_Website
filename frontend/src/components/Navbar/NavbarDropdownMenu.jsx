import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

export default function NavbarDropdownMenu(props) {

    let title = props.title
    let items = props.items
    let path = props.path

    return (
        <a className='Nav-panel-items' href={path} >{title}
            <ul className='Nav-drop-down-ul'>
                {
                    items.map((item) =>(
                        <a key={item.title} href={item.path} className="Nav_panel_clubs_items" tabIndex={item.index}>
                            {item.title}
                        </a>
                    ))
                }
            </ul>
        </a>

    )
}

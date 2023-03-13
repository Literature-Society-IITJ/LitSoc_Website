import React from 'react'

export default function NavbarDropdownMenu(props) {

    let title = props.title
    let items = props.items


    return (
        <a className='Nav_panel_items'>{title}
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

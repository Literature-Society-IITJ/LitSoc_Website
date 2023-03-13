import React from 'react'
import {navClubsItems, navPanelItems} from '../../data/NavbarData'
import NavbarDropdownMenu from './NavbarDropdownMenu';

export default function NavPanel() {
    return (
        <div className='Nav-panel' tabIndex={2}>
            {
                navPanelItems.map((item) =>(
                    <NavbarDropdownMenu key={item.title} title={item.title} items={navClubsItems}/>
                ))
            }
        </div>
    );
}







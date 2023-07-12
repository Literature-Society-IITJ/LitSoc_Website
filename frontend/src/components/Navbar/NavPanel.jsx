import React from 'react'
import {navClubsItems, navPanelItems} from '../../data/NavbarData'
import NavbarDropdownMenu from './NavbarDropdownMenu';

export default function NavPanel() {
    return (
        <div className='nav-panel' tabIndex={2}>
            {
                navPanelItems.map((item) =>(
                    <NavbarDropdownMenu key={item.title} title={item.title} path={item.path} items={item.dropdown} />
                ))
            }
        </div>
    );
}







import React from 'react'
import {navClubsItems, navPanelItems} from '../../data/Navbar_data'
import NavBarOption from './NavBar_Option';

export default function Nav_panel() {
    return (
        <div className='Nav_panel' tabIndex={2}>
            {
                navPanelItems.map((item) =>(
                    <NavBarOption key={item.title} title={item.title} items={navClubsItems}/>
                ))
            }
        </div>
    );
}







import React, { useState } from 'react'
import {navPanelItems} from '../../data/NavbarData'
import NavSidebarMenu from './NavSidebarMenu'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx'

export default function NavSideBar(props) {
    
    let [NavSidebarList, setNavSidebarList] = useState(navPanelItems)
    let [NavSidebarCrossIcon, setNavSidebarCrossIcon] = useState(true)

    return (
        <div className='nav-side-bar'>
            <div className='nav-side-bar-upper-bar'>
                {
                    NavSidebarCrossIcon ? (
                        <RxCross2 className='nav-side-bar-upper-bar-icons' onClick={() => {
                            console.log(1)
                            document.querySelectorAll('.nav-side-bar')[0].classList.add('nav-side-bar-animate-out')
                            console.log(2)
                            setTimeout(() => { 
                                props.setShowSideBar(false) 
                                document.querySelectorAll('.nav-side-bar')[0].classList.remove('nav-side-bar-animate-out')
                            }, 500)
                        }}/>
                    ) : (
                        <RiArrowLeftSLine className='nav-side-bar-upper-bar-icons' onClick={() => { setNavSidebarCrossIcon(true)
                        setNavSidebarList(navPanelItems)}}/>
                    )
                }
            </div>

            <div className='nav-side-bar-list'>
                {
                    NavSidebarList.map((item) =>(
                        <NavSidebarMenu key={item.title} title={item.title} path={item.path} items={item.dropdown} setNavSidebarList={setNavSidebarList} setNavSidebarCrossIcon={setNavSidebarCrossIcon}/>
                    ))
                }
            </div>
        </div>
    )
}

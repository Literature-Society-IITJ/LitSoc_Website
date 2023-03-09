import React from 'react'

export default function Nav_panel() {
    return (
        <div className='Nav_panel' tabIndex={2}>
            <a href="#">
                <div className='Nav_panel_Clubs' tabIndex={1}>
                    CLUBS
                </div>
            </a>
            <a href="#">
                <div className='Nav_panel_Events' tabIndex={2}>
                    EVENTS
                </div>
            </a>
            <a href="#">
                <div className='Nav_panel_ReaderSec' tabIndex={3}>
                    READER'S SECTION
                </div>
            </a>
            <a href="#">
                <div className='Nav_panel_Archive' tabIndex={4}>
                    ARCHIVE
                </div>
            </a>
            <a href="#">
                <div className='Nav_panel_Puzzles' tabIndex={5}>
                    PUZZLES
                </div>
            </a>
            <a href="#">
                <div className='Nav_panel_Team' tabIndex={6}>
                    TEAM
                </div>
            </a>
            <a href="#">
                <div className='Nav_panel_Library' tabIndex={7}>
                    LIBRARY
                </div>
            </a>
        </div>
    )
}

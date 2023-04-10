import React from 'react'
import { useState } from 'react'
// import ItemMain from './'
// import {B21CS073_Lab_Assignment_4} from '../../data/B21CS073_Lab_Assignment_4.pdf'

export default function PuzzleCard(props) {

    let [showItem, setShowItem] = useState(false)


    let title = 'Oblivian'
    let img_src = '/src/media/images/bg4.jpg'
    let content = props.content
    let author = props.author

    return (
        <div className='puzzles puzzle-card'>
            <a className='puzzles puzzle-card-image-button' href='https://www.google.com/' without rel="noopener noreferrer" target='_blank' >
                {/* <div className='puzzles puzzle-card-image-container'> */}
                
                    {/* <img src={img_src} alt={title} className='puzzles puzzle-card-image' />
                 */}
                {/* <div className='puzzles puzzle-card-image-border'>
                </div> */}
                {/* </div> */}
            </a>
            
            <div className='puzzles puzzle-card-title'>{title}</div>

            {/* <ItemMain showItem={showItem} setShowItem={setShowItem} content={props.content} author={props.author}/> */}
        </div>
    )
}

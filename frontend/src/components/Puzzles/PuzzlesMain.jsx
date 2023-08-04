import { React, useState, useEffect } from 'react'
import PuzzleCard from './PuzzleCard'
import { getPuzzles } from '../../api/axios'
import { Image } from '../../data/Clubs'

export default function PuzzlesMain() {

    let [puzzles, setPuzzles] = useState([])
    useEffect(() => {getPuzzles().then((data) => {setPuzzles(data)})}, [])

    // console.log(puzzles)
    let image = `https://source.unsplash.com/random/400x250/?puzzle`

    return (
        <div className='puzzles-body'>
            <div className='puzzles-contents'>
                {
                puzzles.length ? (
                    puzzles.map((item) =>(
                        <PuzzleCard title={item.puzzle_title} author={item.made_by} puzzle={item.puzzle} image={image + `,${Math.random()}`} />
                        ))
                    ):
                    <div className='puzzles-no-content-message'>
                        Alas! There are no puzzles right now! Please Wait for some time!
                        {/* To be live in a few days! */}
                    </div>
                }
            </div>
        </div>
  )
}

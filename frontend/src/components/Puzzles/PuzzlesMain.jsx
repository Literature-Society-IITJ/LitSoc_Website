import { React, useState, useEffect } from 'react'
import PuzzleCard from './PuzzleCard'
import { getPuzzles } from '../../api/axios'

export default function PuzzlesMain() {

    let [puzzles, setPuzzles] = useState([])
    useEffect(() => {getPuzzles().then((data) => {setPuzzles(data)})}, [])

    console.log(puzzles)

    return (
        <div className='puzzles-body'>
            <div className='puzzles-contents'>
                {
                puzzles.length ? (
                    puzzles.map((item) =>(
                        <PuzzleCard title={item.puzzle_title} author={item.made_by} puzzle={item.puzzle} image={'https://source.unsplash.com/random/400x250/?darknature'}/>
                        ))
                    ):
                    <div className='reader-sec-contents no-content-message'>Alas! There are no puzzles right now! Please Wait for some time!</div>
                }
            </div>
        </div>
  )
}

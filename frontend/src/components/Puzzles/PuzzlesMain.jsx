import React from 'react'
import PuzzleCard from './PuzzleCard'

export default function PuzzlesMain() {
    let puzzlelink = ''

    return (
        <div className='puzzles-body'>
            {/* Welcome to the reader section */}
            <PuzzleCard />
            <PuzzleCard />
            <PuzzleCard />
            <PuzzleCard />
        </div>
  )
}

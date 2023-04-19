import React from 'react'
import { ClubsData } from '../../data/Clubs'
import ClubsTop from './ClubsTop'
import './Clubs.css'
import BottomBar from '../BottomBar/BottomBar'

export default function GoonjMain() {

    let clubdata = ClubsData.Goonj

    return (
        <div className='cwpc-middle'>
            <div className='middle-container-1'>
                <div className='middle-container-1-image'></div>
                <div className='middle-container-1-description'>
                Welcome to the college book club! We are a group of students who share a love for reading and a desire to engage with literature in a deeper, more meaningful way. Our club is open to anyone who wants to join, regardless of their major, background, or level of experience with books. Each semester, we will select a series of books to read and discuss, ranging from classics of literature to contemporary bestsellers. Our goal is to foster a community of readers who can share their thoughts, insights, and perspectives on a wide range of texts. Whether you're an avid reader or just starting to explore the world of books, we invite you to join us on this exciting journey of discovery and learning.
                </div>
            </div>
            <div className='middle-container-2'>
            "There is no friend as loyal as a book." - Ernest Hemingway.
            </div>
        </div>
    )
}

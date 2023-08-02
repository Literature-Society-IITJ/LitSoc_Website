import React from 'react'



const moveStars = () => {
    var cursorposition = window.scrollY

    for (let i=0; i<80; i++) {
        document.getElementById(`${i}star1`).style.top = `${document.getElementById(`${i}star1`).style.top.split('px')[0] + cursorposition}px`;
        document.getElementById(`${i}star2`).style.top = `${document.getElementById(`${i}star2`).style.top.split('px')[0] + cursorposition}px`;
        document.getElementById(`${i}star3`).style.top = `${document.getElementById(`${i}star3`).style.top.split('px')[0] + cursorposition}px`;
        console.log(cursorposition)
    }

};

window.addEventListener('scroll', moveStars);




export default function HomeStarfield() {
    let content = [];
    for (let i=0; i<80; i++) {
        content.push(<div className='home-stars-1' id = {`${i}star1`} style={{position: 'absolute', top: `${window.innerHeight * Math.random()}px`, left: `${window.innerWidth * Math.random()}px`}}></div>);
        content.push(<div className='home-stars-2' id = {`${i}star2`} style={{position: 'absolute', top: `${window.innerHeight * Math.random()}px`, left: `${window.innerWidth * Math.random()}px`}}></div>);
        content.push(<div className='home-stars-3' id = {`${i}star3`} style={{position: 'absolute', top: `${window.innerHeight * Math.random()}px`, left: `${window.innerWidth * Math.random()}px`}}></div>);
        // content.push(<div className='home-stars-4' style={{position: 'absolute', top: `${window.innerHeight * Math.random()}px`, left: `${window.innerWidth * Math.random()}px`}}></div>);
    }

    
    return (
        <div className='home-starfield'>
            {
                content.map((item) => (
                    item
                ))
            }
        </div>
    )
}

import React from 'react'
import { useState, useEffect } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';


// const moveStars = () => {
//     var cursorposition = window.

//     for (let i=0; i<80; i++) {
//         document.getElementById(`${i}star1`).style.top = `${document.getElementById(`${i}star1`).style.top.split('px')[0] + cursorposition}px`;
//         document.getElementById(`${i}star2`).style.top = `${document.getElementById(`${i}star2`).style.top.split('px')[0] + cursorposition}px`;
//         document.getElementById(`${i}star3`).style.top = `${document.getElementById(`${i}star3`).style.top.split('px')[0] + cursorposition}px`;
//         console.log(cursorposition)
//     }

// };

// window.addEventListener('scroll', moveStars);




export default function HomeStarfield() {

    const [scrollPosition, setScrollPosition] = useState(0);
    
    // const handleScroll = () => {
    //     for (let i=0; i<200; i++) {
    //         document.getElementById(`${i}star1`).style.transform = `translateY(${window.scrollY/40}px)`;
    //         document.getElementById(`${i}star2`).style.transform = `translateY(${window.scrollY/20}px)`;
    //         document.getElementById(`${i}star3`).style.transform = `translateY(${window.scrollY/30}px)`;
    //     }
    // };
      
    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    // }, []);


    // let content = [];
    // for (let i=0; i<200; i++) {
    //     content.push(<div className='home-stars-1' id = {`${i}star1`} style={{position: 'absolute', top: `${window.innerHeight * ( Math.random() - 0.5)*2}px`, left: `${window.innerWidth * Math.random()}px`}} ></div>);
    //     content.push(<div className='home-stars-2' id = {`${i}star2`} style={{position: 'absolute', top: `${window.innerHeight * ( Math.random() - 0.5)*2}px`, left: `${window.innerWidth * Math.random()}px`}} ></div>);
    //     content.push(<div className='home-stars-3' id = {`${i}star3`} style={{position: 'absolute', top: `${window.innerHeight * ( Math.random() - 0.5)*2}px`, left: `${window.innerWidth * Math.random()}px`}}></div>);
    // }
    let content = [];
    for (let i=0; i<200; i++) {
        content.push(<div className='home-stars-1' id = {`${i}star1`} style={{position: 'absolute', top: `${window.innerHeight * ( Math.random() - 0.5)*2}px`, left: `${window.innerWidth * Math.random()}px`}} ></div>);
    }
    let content2 = [];
    for (let i=0; i<200; i++) {
        content.push(<div className='home-stars-2' id = {`${i}star2`} style={{position: 'absolute', top: `${window.innerHeight * ( Math.random() - 0.5)*2}px`, left: `${window.innerWidth * Math.random()}px`}} ></div>);
    }
    let content3 = [];
    for (let i=0; i<200; i++) {
        content.push(<div className='home-stars-3' id = {`${i}star1`} style={{position: 'absolute', top: `${window.innerHeight * ( Math.random() - 0.5)*2}px`, left: `${window.innerWidth * Math.random()}px`}} ></div>);
    }

    
    return (
        <div className='home-starfield'>
            {/* <ParallaxProvider> */}
                {
                    content.map((item) => (
                        <ParallaxProvider speed={-20}>
                            {item}
                        </ParallaxProvider>
                    ))
                }
                {
                    content2.map((item) => (
                        <ParallaxProvider speed={10}>
                            {item}
                        </ParallaxProvider>
                    ))
                }
                {
                    content3.map((item) => (
                        <ParallaxProvider speed={3}>
                            {item}
                        </ParallaxProvider>
                    ))
                }
            {/* </ParallaxProvider> */}
        </div>
    )
}

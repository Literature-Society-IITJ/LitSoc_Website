import React, { useEffect, useRef } from 'react'
import { HomeAllSecDescList } from '../../data/HomePageData'



const addDescriptionAnimation = () => {
    const homeAllSecDescCard = document.querySelectorAll(".home-all-desc-card");
    homeAllSecDescCard.forEach(elem => {
        if (elem.getBoundingClientRect().top < window.innerHeight-60) {
            elem.classList.add('home-all-desc-card-animate');
            // document.querySelectorAll(".home-all-desc-card-border")[0].classList.add('home-all-desc-card-border-animate');
            // elem.style.animation = 'HomeAllDescFadeIn 1s forwards ease-in-out 0s';
        }
    })

    const homeAllSecDescCardBorder = document.querySelectorAll(".home-all-desc-card-border");
    homeAllSecDescCardBorder.forEach(elem => {
        if (elem.getBoundingClientRect().top < window.innerHeight-60) {
            elem.classList.add('home-all-desc-card-border-animate');
            // document.querySelectorAll(".home-all-desc-card-border")[0].classList.add('home-all-desc-card-border-animate');
            // elem.style.animation = 'HomeAllDescBorderScale 1s forwards ease-in-out 0s';
        }
    })

    const homeAllSecDescCard45DegContainer = document.querySelectorAll(".home-all-desc-45rotate-container");
    homeAllSecDescCard45DegContainer.forEach(elem => {
        if (elem.getBoundingClientRect().top < window.innerHeight-60) {
            elem.classList.add('home-all-desc-45rotate-container-animate');
            // document.querySelectorAll(".home-all-desc-card-border")[0].classList.add('home-all-desc-card-border-animate');
            // console.log(elem.style)
            // elem.style.animation = 'HomeAllSec45DegRotate 1s forwards ease-in-out 0s';
        }
    })

    const homeAllSecDescCardContentContainer = document.querySelectorAll(".home-all-desc-content-container");
    homeAllSecDescCard45DegContainer.forEach(elem => {
        if (elem.getBoundingClientRect().top < window.innerHeight-60) {
            elem.classList.add('home-all-desc-content-container-animate');
            // document.querySelectorAll(".home-all-desc-card-border")[0].classList.add('home-all-desc-card-border-animate');
            // console.log(elem.style)
            // elem.style.animation = 'HomeAllSec45DegRotate 1s forwards ease-in-out 0s';
        }
    })
};

window.addEventListener('scroll', addDescriptionAnimation);




const handleClickInside = () => {
    if (!(document.querySelectorAll('.nav-panel')[0].style.display == 'none')) {
        document.querySelectorAll('#nav-panel-club')[0].classList.add('nav-panel-items-hover')
        setTimeout(() => { document.querySelectorAll('#nav-panel-club')[0].classList.remove('nav-panel-items-hover') }, 5000);
        // console.log(111111111)
    } else {
        // document.querySelectorAll('.upper-bar-hamburger-menu')[0].setAttribute
        // console.log(222222222)
    }

}


export default function HomeAllSecDesc() {

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
    }, [])

    const refOne = useRef();

    const handleClickOutside = (event) => {
        if (!refOne.current.contains(event.target)) {
            document.querySelectorAll('#nav-panel-club')[0].classList.remove('nav-panel-items-hover')
        }
    }


    return (
        <div className='home-all-sections-desc'>
            {
                HomeAllSecDescList.map((item) => (
                    item.href.length ? (
                        <a href={item.href} className='home-all-desc-card' id = {item.id}>
                            <div className='home-all-desc-card-border'></div>
                            <div className='home-all-desc-card-title'>{item.title}</div>
                            <div className='home-all-sec-content-box-container'>
                                <div className='home-all-desc-45rotate-container'>
                                    <div className='home-all-desc-content-container'>{item.desc}</div>
                                </div>
                            </div>
                        </a>

                    ) : (
                        <div className='home-all-desc-card' ref={refOne} id = {item.id} 
                                onClick={ () => {handleClickInside()}}
                                // onMouseEnter={() => {document.getElementById(item.id)[0].style.}}
                                >
                            <div className='home-all-desc-card-border'></div>
                            <div className='home-all-desc-card-title'>{item.title}</div>
                            <div className='home-all-sec-content-box-container'>
                                <div className='home-all-desc-45rotate-container'>
                                    <div className='home-all-desc-content-container'>{item.desc}</div>
                                </div>
                            </div>
                        </div>
                    )
                ))
            }
        </div>
    )
}

import React from 'react'




// const changeNavBarBG = () => {
//     var cursorposition = window.scrollY/7

//     document.querySelectorAll(".nav-bar-main")[0].style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7)" + cursorposition + "%, rgba(16, 20, 27, 0))";
//     document.querySelectorAll(".nav-bar-main")[0].style.onhover.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7)" + cursorposition + "%, rgba(16, 20, 27, 0)), linear-gradient(180deg, rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 1))";
// };

// window.addEventListener('scroll', changeNavBarBG);


const addDescriptionAnimation = () => {

    // console.log(document.querySelectorAll(".home-society-desc-row1")[0].getBoundingClientRect().top)
    // console.log(window.innerHeight/2)

    if (document.querySelectorAll(".home-society-desc-row1")[0].getBoundingClientRect().top < window.innerHeight-100) {
        document.querySelectorAll(".home-society-desc-row1")[0].classList.add('home-society-desc-row1-animation');
        document.querySelectorAll(".home-society-desc-content-row1")[0].classList.add('home-society-desc-content-row1-animation');
        // console.log(1111111111111)
    }
    
    if (document.querySelectorAll(".home-society-desc-row2")[0].getBoundingClientRect().top < window.innerHeight-100) {
        document.querySelectorAll(".home-society-desc-row2")[0].classList.add('home-society-desc-row2-animation');
        document.querySelectorAll(".home-society-desc-content-row2")[0].classList.add('home-society-desc-content-row2-animation');

        // console.log(22222222222)
    }
};

window.addEventListener('scroll', addDescriptionAnimation);


export default function HomeSocDesc() {
    return (
        <div className='home-society-desc-container'>
            <div className='home-society-desc-row1'>
                <div className='home-society-desc-content-row1'>
                    <div className='home-society-desc-title'>Who are we?</div>
                    <div className='home-society-desc-para'>
                        We are the Literature Society, a family of lexiphiles and cat-lovers. Our interests revolve around the lives of letters, the world of words, the symphony of sentences, the virtue of verses and the benevolence of books. 
                    </div>
                </div>
            </div>

            <div className='home-society-desc-row2'>
                <div className='home-society-desc-content-row2'>
                    <div className='home-society-desc-title'>What do we do?</div>
                    <div className='home-society-desc-para'>
                        Us literatis indulge in anything and everything related to words. Be it reading, writing or proving our point right, we are the jack of all trades. We write eloquent poetry, partake in fierce debates, solve puzzling word games, read captivating books and most of all, we have a lot of fun!
                    </div>
                </div>
            </div>
        </div>
    )
}
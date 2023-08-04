import React, {useState, useEffect} from 'react'
import NavbarUpper from './NavbarUpper'
import './Navbar.css'
import '../SigningModal/SigningModal.css'
import NavPanel from './NavPanel';
import SignInModal from '../SigningModal/SignInModal';
import SignUpModal from '../SigningModal/SignUpModal';
import NavSideBar from './NavSideBar';




// const changeNavBarBG = () => {
//     var cursorposition = window.scrollY/7

//     document.querySelectorAll(".nav-bar-main")[0].style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7)" + cursorposition + "%, rgba(16, 20, 27, 0))";
//     document.querySelectorAll(".nav-bar-main")[0].style.onhover.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7)" + cursorposition + "%, rgba(16, 20, 27, 0)), linear-gradient(180deg, rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 1))";
// };

// window.addEventListener('scroll', changeNavBarBG);


const changeNavBarBG = () => {
    
    if (window.scrollY) {
        document.querySelectorAll(".nav-bar-main")[0].classList.add('nav-bar-main-hover');
    }
    else{
        document.querySelectorAll(".nav-bar-main")[0].classList.remove('nav-bar-main-hover');
    }

    
};

window.addEventListener('scroll', changeNavBarBG);



export default function Navbar() {
    let [showSigninPopup, setShowSignInPopUp] = useState(false)
    let [showSignupPopup, setShowSignUpPopUp] = useState(false)
    let [showSideBar, setShowSideBar] = useState(false)

    return (
        <>
            <div className='nav-bar'>
                <div className='nav-bar-main' tabIndex={1}>
                    <NavbarUpper showSigninPopup={showSigninPopup}  setShowSignInPopUp={setShowSignInPopUp} setShowSideBar={setShowSideBar} />
                    <NavPanel />
                </div>
            </div>

            {showSideBar && <NavSideBar setShowSideBar={setShowSideBar} />}

            <SignInModal showSigninPopup={showSigninPopup} setShowSignInPopUp={setShowSignInPopUp}
            setShowSignUpPopUp={setShowSignUpPopUp} />            
            <SignUpModal showSignupPopup={showSignupPopup} setShowSignUpPopUp={setShowSignUpPopUp} />
        </>
    )
}
    
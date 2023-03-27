import React, {useState, useEffect} from 'react'
import NavbarUpper from './NavbarUpper'
import './Navbar.css'
import '../SigningModal/SigningModal.css'
import NavPanel from './NavPanel';
import SignInModal from '../SigningModal/SignInModal';
import SignUpModal from '../SigningModal/SignUpModal';
// import Nav_Club_dropdowns from './Nav_Club_drop';

const changeNavBarBG = () =>{
    var cursorposition = window.scrollY/7

    document.querySelectorAll(".nav-bar-main")[0].style.backgroundImage = "linear-gradient(180deg, rgba(0, 0, 0, 0.7)" + cursorposition + "%, rgba(16, 20, 27, 0))";
};

window.addEventListener('scroll', changeNavBarBG);

export default function Navbar() {
    let [showSigninPopup, setShowSignInPopUp] = useState(false)
    let [showSignupPopup, setShowSignUpPopUp] = useState(false)


    return (
        <>
            <div className='nav-bar'>
                <div className='nav-bar-main' tabIndex={1}>
                    <NavbarUpper showSigninPopup={showSigninPopup}  setShowSignInPopUp={setShowSignInPopUp} />
                    <NavPanel />
                </div>
            </div>
            <div>
                <SignInModal showSigninPopup={showSigninPopup} setShowSignInPopUp={setShowSignInPopUp}
                setShowSignUpPopUp={setShowSignUpPopUp} />            
            </div>
            <div>
                <SignUpModal showSignupPopup={showSignupPopup} setShowSignUpPopUp={setShowSignUpPopUp} />
            </div>
        </>
    )
}
    
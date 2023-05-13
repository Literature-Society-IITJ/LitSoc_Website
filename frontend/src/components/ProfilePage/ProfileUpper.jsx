import React from 'react'
import { removeToken } from '../../utilities/localStorage'
import { useNavigate } from 'react-router-dom'

export default function ProfileUpper() {

    const navigate = useNavigate()

    const navigateToHome = () => {
        navigate('/home')
    };

    return (
        <div className='profile-page-top'>
            <div className='profile-page-home-button'>
                <button onClick={()=>{navigateToHome()}}>
                    HOME
                </button>
            </div>

            <div className='profile-page-logout-button'>
                <button onClick={()=>[removeToken(), navigateToHome()]}>
                    LogOut                  
                </button>
            </div>
        </div>
    )
}

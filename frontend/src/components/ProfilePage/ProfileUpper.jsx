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
            <button className='profile-page-top-button' onClick={()=>{navigateToHome()}}>
                HOME
            </button>

            <button className='profile-page-top-button' onClick={()=>[removeToken(), navigateToHome()]}>
                LogOut                  
            </button>
        </div>
    )
}

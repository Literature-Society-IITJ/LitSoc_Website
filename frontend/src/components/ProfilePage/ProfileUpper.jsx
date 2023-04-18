import React from 'react'
import { removeToken } from '../../utilities/localStorage'

export default function ProfileUpper() {
  return (
    <div className='profile-page-top'>
        <div className='profile-page-home-button'>
            <button>
                <a href="/home">
                    HOME
                </a>
            </button>
        </div>

        <div className='profile-page-logout-button'>
            <button onClick={removeToken}>
                <a href="/home">
                    Logout
                </a>
            </button>
        </div>
        {/* <div>settings</div> */}
    </div>
  )
}

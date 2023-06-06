import React, { useEffect, useState } from 'react'
import secy from '../../media/Teams/secy_dity.jpg'


export default function ProfileCard(props) {

    console.log(props)
    let userDetails = props.userDetails

    return (
        <div className='profile-page profile-card'>
            <div className='profile-card-image-container'>
                <img src={secy} width='300px' height='300px' className='profile-card-image' />
            </div>

            <div className='profile-card-name'>
                {userDetails.username}
            </div>
            <div className='profile-card-position'>
                {userDetails.role}
            </div>
        </div>
    )
}

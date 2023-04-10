import React from 'react'

export default function ItemMain(props) {

    let title = 'Oblivian'
    let img_src = '/src/media/images/bg4.jpg'
    let content = props.content
    let author = props.author
    

    return props.showItem ? (
        <div className='item-main'>
            <div className='item-main-box'>
                <div className='sign-modal-top' id='sign-in'>
                    <div className='sign-modal-top-left'>{title}</div>
                    <div className='sign-modal-top-right'>
                        <button onClick={()=>props.setShowItem(false)}>X</button>
                    </div>
                </div>
                <div className='item-main-body' id='sign-in'>
                    <div style={{fontSize:"25px", padding:"10px 0px 30px 0px", fontWeight:"normal"}}>{content}</div>
                    <div>{author}</div>
                </div>
            </div>
        </div>
    ):null;
}

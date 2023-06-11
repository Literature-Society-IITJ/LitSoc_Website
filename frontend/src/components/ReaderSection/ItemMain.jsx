import React from 'react'
import { RxCross2 } from "react-icons/rx"
import { removeContent } from '../../api/axios'


export default function ItemMain(props) {

    let title = props.title
    let img_src = props.img
    let content = props.content
    let author = props.author
    let isAdmin = props.isAdmin

    return props.showItem ? (
        <div className='item-main'>
            <div className='item-main-box' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4) 75%, rgba(0, 0, 0, 0)), linear-gradient(90deg, rgba(0, 0, 0, 0.4) 75%, rgba(0, 0, 0, 0)), url(${img_src})`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}}>
                <div className='item-main-top'>
                    <div className='item-box-title'>{title}</div>
                    <div className='item-box-x-button' onClick={()=>props.setShowItem(false)}>
                        <RxCross2 />
                    </div>
                </div>

                <div className='item-main-body'>
                    <div className='item-main-body-content' id={`readSec${title}`}>
                    {content.split(/\n/).map(line => <div key={line}>{line}<br /></div>)}
                    </div>
                    <div className='item-main-body-author'>{'- ' + author}</div>
                </div>

                <div className='item-main-body-bottom-border'></div>

                {
                    (isAdmin) ? (
                        <div className='item-main-body-remove-button'>
                            <button onClick={() => {removeContent(title)
                                                    props.setRefresh(true)
                                                    props.setShowItem(false)}}>Remove</button>
                        </div>
                    ) : null
                }
            </div>
        </div>
    ):null;
}

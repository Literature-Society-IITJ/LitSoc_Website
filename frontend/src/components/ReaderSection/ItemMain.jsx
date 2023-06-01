import React from 'react'
import { RxCross2 } from "react-icons/rx"


export default function ItemMain(props) {

    let title = props.title
    let img_src = props.img
    let content = props.content
    let author = props.author
    
    // let a = "hello\nworld"
    
    // content.replace("\n", "<br>")
    // content = content.replace(/[\r\n]+/g,"<br />")
    // console.log(content)

    // let f = () => {
    //     document.getElementById(`readSec${title}`).innerHTML = content
    // }


    return props.showItem ? (
        <div className='item-main'>
            <div className='item-main-box' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.6) 75%, rgba(0, 0, 0, 0)), linear-gradient(90deg, rgba(0, 0, 0, 0.6) 75%, rgba(0, 0, 0, 0)), url(${img_src})`}}>
                <div className='sign-modal-top' id='sign-in'>
                    <div className='sign-modal-top-left'>{title}</div>
                    <div className='sign-modal-top-right' onClick={()=>props.setShowItem(false)}>
                        <RxCross2 />
                    </div>
                </div>

                <div className='item-main-body' id='sign-in'>
                    <div id={`readSec${title}`} style={{fontSize:"25px", padding:"10px 0px 30px 0px", fontWeight:"normal"}}>
                    {content.split(/\n/).map(line => <div key={line}>{line}<br /></div>)}
                    </div>
                    <div>{author}</div>
                </div>
            </div>
        </div>
    ):null;
}

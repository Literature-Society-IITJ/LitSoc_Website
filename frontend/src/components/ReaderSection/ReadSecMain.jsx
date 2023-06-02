import {React, useState, useEffect} from 'react'
import ItemCard from './ItemCard'
import { getReadSecItems } from '../../api/axios'
import { readersecNavPanelItems } from '../../data/PageNavbarItems'
import ReadSecFeatured from './ReadSecFeatured'



export default function ReadSecMain() {

    const handleDivClick = (id) => {
        readersecNavPanelItems.map((item) =>{
            if (item.category === id) {
                const element = document.getElementById(item.category);
                element.style.backgroundColor = 'white';
                element.style.fontWeight = 'bold';
                element.style.color = 'black';
            } else {
                const element = document.getElementById(item.category);
                element.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                element.style.fontWeight = 'bold';
                element.style.color = 'white';
            }
          })
    };

    let [onDisplayCategory, setOnDisplayCategory] = useState('poems')

    let [readsecContent, setReadsecContent] = useState([])
    useEffect(() => {getReadSecItems(onDisplayCategory).then((data) => {setReadsecContent(data)})}, [onDisplayCategory])

    return (
        <div className='reader-sec-body'>

            <ReadSecFeatured />

            <div className="readersec-content-main">
                <div className='reader-sec-nav-panel'>
                    {
                        readersecNavPanelItems.map((items) =>(
                            <div className='reader-sec-nav-panel-items' id={items.category} onClick={()=>[setOnDisplayCategory(items.category), handleDivClick(items.category)]}>{items.title}</div>
                            ))
                    }
                </div>

                <div className='reader-sec-contents'>
                    {
                    readsecContent.length ? (
                        readsecContent.map((item) =>(
                            <ItemCard title={item.title} content={item.content} author={item.member_id} img={item.background}/>
                            ))
                        ):
                        <div className='reader-sec-contents no-content-message'>Alas! There is no content in this category right now!!!</div>
                    }
                </div>
            </div>
        </div>
  )
}

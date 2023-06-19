import {React, useState, useEffect} from 'react'
import ItemCard from './ItemCard'
import { checkAdmin, getReadSecItems } from '../../api/axios'
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

    let [onDisplayCategory, setOnDisplayCategory] = useState('')
    let [refresh, setRefresh] = useState(true)

    let [readsecContent, setReadsecContent] = useState([])
    useEffect(() => {
        getReadSecItems(onDisplayCategory).then((data) => {
            setReadsecContent(data)})
            setRefresh(false)}
            ,[onDisplayCategory, refresh])


    let [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {checkAdmin().then((data) => { setIsAdmin(data) })}, [])

    // console.log(readsecContent)
    

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
                            <ItemCard title={item.title} content={item.content} author={item.member_name} img={item.background} setRefresh={setRefresh} isAdmin={isAdmin} category={item.category} clickEnable={true}/>
                            ))
                        ):
                        <div className='reader-sec-contents no-content-message'>
                            {
                                (onDisplayCategory) ? 
                                    'Alas! There is no content in this category right now!!!' :                                 
                                    'Please select a category!'
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
  )
}

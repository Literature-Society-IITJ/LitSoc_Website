import {React, useState, useEffect} from 'react'
import ItemCard from './ItemCard'
import { getReadSecItems } from '../../api/axios'
import { readersecNavPanelItems } from '../../data/PageNavbarItems'
import ReadSecFeatured from './ReadSecFeatured'

export default function ReadSecMain() {

    let [onDisplayCategory, setOnDisplayCategory] = useState('poems')

    let [readsecContent, setReadsecContent] = useState([])
    useEffect(() => {getReadSecItems(onDisplayCategory).then((data) => {setReadsecContent(data)})}, [onDisplayCategory])

    // let title = readsecContent[0]
    let title = 'oblivion'
    console.log(1)
    console.log(readsecContent)

    let content = 'However, being in love with someone who is far away can also be a beautiful thing. The distance can make you appreciate the moments you have together more, and it can make your relationship stronger. You have to work harder to maintain your connection, but the effort is worth it. challenging and emotional experience. It can be a rollercoaster of emotions, and it can be difficult to navigate. However, it can also be a beautiful thing. The distance can make your relationship stronger, and it can teach you a lot about yourself and your partner. It requires a lot of effort, patience, and trust, but if you are willing to put in the work, it can be one of the most rewarding experiences of your life.'
    let author = 'ChatGPT'


    let content2 = 'It can also teach you a lot about yourself and your partner. You learn how to be patient, understanding, and empathetic. One of the best things about being in a long-distance relationship is that it allows you to focus on yourself. You have more time to pursue your goals and interests, and you can become a better version of yourself. It can also give you the opportunity to strengthen your friendships and relationships with your family. In conclusion, being in love with someone who is far away is a '

    return (
        <div className='reader-sec-body'>

            <ReadSecFeatured />

            <div className="readersec-content-main">
                <div className='reader-sec-nav-panel'>
                    {
                        readersecNavPanelItems.map((items) =>(
                            <div className='reader-sec-nav-panel-items' onClick={()=>setOnDisplayCategory(items.category)}>{items.title}</div>
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
                        <div>There is no content in this category right now!!!</div>
                    }
                    {/* <ItemCard title={title} content={content2} author={author}/> */}
                </div>
            </div>
        </div>
  )
}

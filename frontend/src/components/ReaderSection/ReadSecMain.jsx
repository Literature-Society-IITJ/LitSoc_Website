import React from 'react'
import ItemCard from './ItemCard'

export default function ReadSecMain() {
    let content = 'However, being in love with someone who is far away can also be a beautiful thing. The distance can make you appreciate the moments you have together more, and it can make your relationship stronger. You have to work harder to maintain your connection, but the effort is worth it. challenging and emotional experience. It can be a rollercoaster of emotions, and it can be difficult to navigate. However, it can also be a beautiful thing. The distance can make your relationship stronger, and it can teach you a lot about yourself and your partner. It requires a lot of effort, patience, and trust, but if you are willing to put in the work, it can be one of the most rewarding experiences of your life.'
    let author = 'ChatGPT'


    let content2 = 'It can also teach you a lot about yourself and your partner. You learn how to be patient, understanding, and empathetic. One of the best things about being in a long-distance relationship is that it allows you to focus on yourself. You have more time to pursue your goals and interests, and you can become a better version of yourself. It can also give you the opportunity to strengthen your friendships and relationships with your family. In conclusion, being in love with someone who is far away is a '

    return (
        <div className='reader-sec-body'>
            {/* Welcome to the reader section */}
            <ItemCard content={content} author={author}/>
            <ItemCard content={content2} author={author}/>
            <ItemCard />
            <ItemCard />
        </div>
  )
}

import React from 'react'
import bg4 from '../../media/images/bg4.jpg'

export default function HomeMiddle() {
    return (
        <div className='home-content'>
            <div className='home-society-desc'>
                <div className='home-society-desc-row row-1'>
                    <div className='home-society-desc-image'>
                        <img src={bg4} alt="" height='300px' width='700px'/>
                    </div>

                    <div className='home-society-desc-content' id='row1-content'>
                        <div>
                            {/* <h1> */}
                            <div>
                                Who are we?
                            </div>
                            {/* </h1> */}
                        </div>
                        <div className='home-society-desc-para'>
                            We are the Lit Society, a family of lexiphiles and cat-lovers. Our interests revolve around the lives of letters, the world of words, the symphony of sentences, the virtue of verses and the benevolence of books. 
                        </div>
                    </div>
                </div>

                <div className='home-society-desc-row row-2'>
                    <div className='home-society-desc-content' id='row2-content'>
                        <div>
                            {/* <h1> */}
                            <div>
                                Who do we do we do?
                            </div>
                            {/* </h1> */}
                        </div>
                        <div className='home-society-desc-para'>
                            Us literatis indulge in anything and everything related to words. Be it reading, writing or proving our point right, we are the jack of all trades. We write eloquent poetry, partake in fierce debates, solve puzzling word games, read captivating books and most of all, we have a lot of fun!
                        </div>
                    </div>

                    <div>
                        <img src={bg4} alt="" height='300px' width='700px'/>
                    </div>
                </div>
            </div>
            
            <div className='home-featured-container'>
                <div className='home-feature' id='left'>
                    <div className='home-feature-text' id='left-text'>
                        <div className='heading'>
                            LitSoc is Bidding
                            <br />
                            Farewell...
                        </div>
                        <br />

                        <div className='content'>
                            to the Batch of 2023
                            <br />
                            to our Mentors
                            <br />
                            to our family
                            <br />
                            to the OGs of Lit...
                        </div>
                    </div>
                </div>
                {/* <br /> */}
                <div className='home-feature' id='right'>
                    <div className='home-feature-text' id='right-text'>
                        <div className='heading'>
                            We Love you guys...
                        </div>
                        <br />

                        <div className='content'>
                            Will miss you always
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

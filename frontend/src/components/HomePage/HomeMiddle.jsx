import React from 'react'
import img1 from '../../media/images/1.jpg'
import img2 from '../../media/images/2.jpg'


export default function HomeMiddle() {
    return (
        <div className='home-content'>
            <div className='home-society-desc'>
                <div className='home-society-desc-row row-1'>
                    <div className='home-society-desc-image'>
                        <img className='home-soc-desc-img' src={img1} alt="" height='300px' width='700px'/>
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
                                What do we do?
                            </div>
                            {/* </h1> */}
                        </div>
                        <div className='home-society-desc-para'>
                            Us literatis indulge in anything and everything related to words. Be it reading, writing or proving our point right, we are the jack of all trades. We write eloquent poetry, partake in fierce debates, solve puzzling word games, read captivating books and most of all, we have a lot of fun!
                        </div>
                    </div>

                    <div>
                        <img className='home-soc-desc-img' src={img2} alt="" height='300px' width='700px'/>
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
                            To the Batch of 2023,
                            <br />
                            To our family...
                            <br />
                            To the OGs of Lit,
                            <br />
                            and to our beloved Mentors...
                        </div>
                    </div>
                </div>
                {/* <br /> */}
                <div className='home-feature' id='right'>
                    <div className='home-feature-text' id='right-text'>
                        <div className='heading'>
                            Will miss you guys...
                        </div>
                        <br />

                        <div className='content'>
                            With heavy hearts we bid adieu,
                            <br />
                            Our seniors leaving, our emotions askew...
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='home-events'>
                <div className='home-events-text'>
                    <h1>Events</h1>
                </div>
            </div> */}
        </div>
    )
}

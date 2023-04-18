import React from 'react'
import bg4 from '../../media/images/bg4.jpg'

export default function HomeMiddle() {
    return (
        <div className='home-content'>
            {/* <div className='home-middle-content' id='hmc_1' tabIndex={1}>
                    <img src={bg4} alt="" height='350px' />
                    <div>
                        <h1>The Book Club</h1>
                        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti harum nulla dolor quibusdam soluta id commodi est beatae, dolorem, possimus a sunt asperiores amet consequatur quas! Ducimus fuga eaque eveniet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam praesentium quidem quaerat nam cumque labore porro, asperiores debitis soluta quam architecto, saepe, aliquam quisquam sunt ab corporis temporibus delectus alias?</div>
                    </div>
            </div> */}
            {/* <div className='home-society-featured'>
                <div className='home-featured-image'>
                </div>
                <div className='home-society-featured-content'>
                <h1>
                    Bidding Farewell...
                </h1>
                </div>
            </div> */}

            <div className='home-society-desc'>
                <div className='home-society-desc-row row-1'>
                    <div className='home-society-desc-image'>
                        <img src={bg4} alt="" height='300px' width='700px'/>
                    </div>

                    <div className='home-society-desc-content' id='row1-content'>
                        <div>
                            <h1>
                                Who are we?
                            </h1>
                        </div>
                        <div className='home-society-desc-para'>
                            We are the Lit Society, a family of lexiphiles and cat-lovers. Our interests revolve around the lives of letters, the world of words, the symphony of sentences, the virtue of verses and the benevolence of books. 
                        </div>
                    </div>
                </div>

                <div className='home-society-desc-row row-2'>
                    <div className='home-society-desc-content' id='row2-content'>
                        <div>
                            <h1>
                                Who are we?
                            </h1>
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
            




            
        </div>
    )
}

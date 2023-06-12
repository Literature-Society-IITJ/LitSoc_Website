import React from 'react'
import { RxCross2 } from 'react-icons/rx'

export default function ContentUploadForm(props) {
    return (
        <>
            <div className='content-upload-form-body'>
                <div className='admin-action-card-upperbar'>
                    <div>Content Upload Form</div>
                    <div className='admin-action-card-x-button' onClick={()=>props.setShowContentUploadForm(false)}>
                        <RxCross2 />
                    </div>
                </div>


                <section className='upload-form-container'>
                    <div className='content-upload-form' id='content-upload-form'>
                        <div className='content-upload-form-input-container'>
                            <div className='content-upload-form-row'>
                                <div className='input-container' id='email'>
                                    <span className='input-container fixed-label'>
                                        Title
                                    </span>
                                    <input type="email" className='input-label' name='email' id='emailInput'/>
                                </div>

                                <div className='input-container' id='email'>
                                    <span className='input-container fixed-label'>
                                        Category
                                    </span>
                                    <select className='input-label' name="cars" id="cars">
                                        <option value="volvo" hidden>--Select a category--</option>
                                        <option value="saab">Poem</option>
                                        <option value="mercedes">Prose</option>
                                        <option value="audi">Fan Fiction</option>
                                        <option value="audi">Article</option>
                                        <option value="audi">Essay</option>
                                    </select>
                                </div>
                            </div>



                            <div className='input-container' id='password'>
                                <span className='input-container fixed-label'>
                                    Password
                                </span>
                                <textarea name="content" id="contentInput" cols="60" rows="12"></textarea>
                                {/* <input type="textarea" className='input-label' name='password' id='passwordInput'/> */}
                            </div>
                            
                            <div className='input-container' id='password'>
                                <span className='input-container fixed-label'>
                                    Background
                                </span>
                                <input type='file' name='' accept='images/*' />
                            </div>

                            <div className='sign-modal-error-msg'>
                                
                            </div>

                            <br />
                        </div>

                        <button className='sign-modal-button' >
                            Upload
                        </button>

                    </div>
                </section>
            </div>
        </>
    )
}

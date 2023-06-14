import React, { useRef, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { uploadContent } from '../../api/axios'

export default function ContentUploadForm(props) {

    const categorySelectRef = useRef(null)
    const [selectedValue, setSelectedValue] = useState('selectCategory')

    let [errorMessage, setErrorMessage] = useState('')


    const uploadContentFunction = () => {
        let title = document.getElementById('titleInput').value
        let category = categorySelectRef.current.value
        let content = document.getElementById('contentInput').value
        let background = document.getElementById('backgroundInput').files[0]
        let background_value = document.getElementById('backgroundInput').value

        const formData = new FormData()
        formData.append('background_image', background)
        formData.append('title', title)
        formData.append('category', category)
        formData.append('content', content)

        // uploadContent(formData)

        document.getElementById('titleInput').value = ''
        // categorySelectRef.current.value = categorySelectRef.current.defaultValue
        setSelectedValue('selectCategory')
        document.getElementById('contentInput').value = ''
        document.getElementById('backgroundInput').value = ''
    }

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
                                <div className='content-upload-form-input-container' id='content-title'>
                                    <span className='input-container-fixed-label'>
                                        Title
                                    </span>
                                    <input type="text" className='input-container-input-label' name='title' id='titleInput'/>
                                </div>

                                <div className='content-upload-form-input-container' id='email'>
                                    <span className='input-container-fixed-label'>
                                        Category
                                    </span>
                                    <select className='input-container-input-label' name="category" id="categoryInput" value={selectedValue} defaultValue='selectCategory'>
                                        <option value="selectCategory" selected='' hidden>--Select a category--</option>
                                        <option value="poem">Poem</option>
                                        <option value="prose">Prose</option>
                                        <option value="fanfic">Fan Fiction</option>
                                        <option value="article">Article</option>
                                        <option value="essay">Essay</option>
                                    </select>
                                </div>
                            </div>



                            <div className='content-upload-form-input-container' id='content'>
                                <span className='input-container-fixed-label'>
                                    Password
                                </span>
                                <textarea className='input-container-input-label' name="content" id="contentInput" cols="5" rows="8"></textarea>
                                {/* <input type="textarea" className='input-label' name='password' id='passwordInput'/> */}
                            </div>
                            
                            <div className='content-upload-form-input-container' id='password'>
                                <span className='input-container fixed-label'>
                                    Background
                                </span>
                                <input type='file' name='' accept='images/*' id='backgroundInput'/>
                            </div>

                            <div className='sign-modal-error-msg'>
                                
                            </div>

                            <br />
                        </div>

                        <div>
                            {errorMessage}
                        </div>

                        <button className='upload-button' onClick={() => {uploadContentFunction()}}>
                            Upload
                        </button>

                    </div>
                </section>
            </div>
        </>
    )
}

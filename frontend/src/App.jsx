import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useRoutes} from "react-router-dom";
import HomePage from './pages/HomePage'
// import home-main from './pages/HomePage'


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/home' element={<HomePage />}/>
                    <Route path=''></Route>
                </Routes>
            </BrowserRouter>
        </> 
    )
}

export default App

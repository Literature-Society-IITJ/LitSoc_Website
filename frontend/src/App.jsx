import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useRoutes} from "react-router-dom";
import HomePage from './pages/HomePage'
import Archive from './pages/Archive'

import BookClub from './pages/clubs/BookClub'
import OratoryClub from './pages/clubs/OratoryClub'
import CWPClub from './pages/clubs/CWPClub'
import WordGamesClub from './pages/clubs/WordGamesCLub'
import Goonj from './pages/clubs/Goonj'
// import home-main from './pages/HomePage'


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />}/>
                    <Route path='/home' element={<HomePage />}/>

                    <Route path='/bookclub' element={<BookClub />}/>
                    <Route path='/oratoryclub' element={<OratoryClub />}/>
                    <Route path='/cwpclub' element={<CWPClub />}/>
                    <Route path='/wordgamesclub' element={<WordGamesClub />}/>
                    <Route path='/goonj' element={<Goonj />}/>

                    {/* <Route path='/allevents' element={<AllEvents />}/>
                    <Route path='/litschamber' element={<LitsChamber />}/>
                    <Route path='/mun' element={<MUN />}/> */}

                    <Route path='/readersec' element={<Archive />}/>
                </Routes>
            </BrowserRouter>
        </> 
    )
}

export default App

import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useRoutes} from "react-router-dom";
import HomePage from './pages/HomePage'
import ReaderSection from './pages/ReaderSection'
import Archive from './pages/Archive'
import Puzzles from './pages/Puzzles'
import Team from './pages/Team'
import Library from './pages/Library'
import BookClub from './pages/clubs/BookClub'
import OratoryClub from './pages/clubs/OratoryClub'
import CWPClub from './pages/clubs/CWPClub'
import WordGamesClub from './pages/clubs/WordGamesCLub'
import Goonj from './pages/clubs/Goonj'
import AllEvents from './pages/AllEvents'
import LitsChamber from './pages/LitsChamber'
import MUN from './pages/MUN'
import Login from './pages/Login'
import Profile from './pages/Profile'
// import home-main from './pages/HomePage'


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/home' element={<HomePage />} />

                    <Route path='/bookclub' element={<BookClub />} />
                    <Route path='/oratoryclub' element={<OratoryClub />} />
                    <Route path='/cwpclub' element={<CWPClub />} />
                    <Route path='/wordgamesclub' element={<WordGamesClub />} />
                    <Route path='/goonj' element={<Goonj />}/>

                    <Route path='/allevents' element={<AllEvents />} />
                    <Route path='/litschamber' element={<LitsChamber />} />
                    <Route path='/mun' element={<MUN />}/>

                    <Route path='/readersec' element={<ReaderSection />} />
                    <Route path='/archive' element={<Archive />} />
                    <Route path='/puzzles' element={<Puzzles />} />
                    <Route path='/team' element={<Team />} />
                    <Route path='/library' element={<Library />} />

                    <Route path='/login' element={<Login />} />

                    <Route path='/profile' element={<Profile />}/>
                </Routes>
            </BrowserRouter>
        </> 
    )
}

export default App

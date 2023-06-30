import React from 'react'
import Competence from './pages/Competence';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Outils from './pages/Outils';
import NotPage from './pages/NotPage';
import Portfolio from './pages/Portfolio';
import { BrowserRouter, Route , Routes  } from 'react-router-dom'
import NavBar from './components/NavBar';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<NavBar />} />
                    <Route index element={<Home />}/>
                    <Route path='/competence' element={<Competence />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/outils' element={<Outils />} />
                    <Route path='*' element={<NotPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;


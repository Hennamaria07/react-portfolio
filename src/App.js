import React from 'react';
import { Home, About, Footer, Services, Contact } from './components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Project from './components/Project/Project';
import NavBar from './components/Header/NavBar';
function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Header /> */}
    <NavBar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/projects" element={<Project />} />
    <Route path="/contact" element={<Contact />} />
     </Routes>
     <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;

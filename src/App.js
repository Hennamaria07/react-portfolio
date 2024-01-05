import React from 'react';
import { Header, Home, About, Footer, Services, Contact } from './components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Project from './components/Project/Project';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
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

import React, { useState } from 'react';
import Navbar from './sections/navbar';
import About from './sections/about';
import Projects from './sections/projects'
import Footer from './sections/footer';
import Contact from './sections/contact';
import Resume from './sections/resume'
import '../styles/style.css';

export default function Welcome() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="container">
      
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
    
    <main>  
        {renderPage()}
        <Footer />
        </main>
    </div>
  );
}

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Programs />
      <Facilities />
      <Registration />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
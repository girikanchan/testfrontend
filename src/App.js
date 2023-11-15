import React from 'react';
import Navbar from './components/Navbar';
import './style.css';
import Footer from './components/Footer';
import Form from './components/form';
import About from './components/About';
function App() {
  return <section>
    <Navbar />
    <About />
    <Form />
    <Footer />
  </section>
}

export default App;

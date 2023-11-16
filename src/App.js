import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Form from './components/form';
import About from './components/About';
import Items from './components/Items';
import UserTest from './components/UserTest';
import News from './components/News';
import Story from './components/Story';
import DishesList from './components/DishesList';
function App() {
  return <section>
    <Navbar />
    <About />
    <Story />
    <Items />
    <DishesList />
    <UserTest />
    <News />
    <Form />
    <Footer />
  </section>
}

export default App;

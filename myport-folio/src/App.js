import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store'
import './styles/App.css';

import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store'
import './styles/App.css';
import './styles/base/globals.css';
import './styles/base/reset.css';
import './styles/base/variables.css';
import './styles/components/Footer.css';
import './styles/components/Header.css';
import './styles/components/ScrollToTop.css';
import './styles/sections/About.css';
import './styles/sections/Hero.css';
import './styles/sections/Experience.css';
import './styles/sections/Services.css';
import './styles/sections/Skills.css';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
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
        <Services />
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
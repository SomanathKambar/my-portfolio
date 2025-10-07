import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
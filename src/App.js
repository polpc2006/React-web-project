import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from './logo-ESGRN.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DESCOBREIX ESCAPE GRN</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          És un videojoc de plataformes en 2D gratuït que està inspirat en la ciutat de Girona.
        </p>

        {/* Menú de navegació */}
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Inici</Link>
          <Link to="/about" className="nav-link">Sobre el projecte</Link>
          <Link to="/univers" className="nav-link">Univers</Link>
        </nav>

        <div className="App-div">
        <a
          className="App-link"
          href="https://drive.google.com/file/d/1dyJWyHr4D73YMcYMq8C6AXNkdzoRkp-V/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          DESCARREGA’L AQUÍ
        </a>
          
        </div>

        
        
        <Outlet /> {/* Aquí es mostrarà el contingut de les subrutes */}

      </header>
    </div>
  );
}

export default App;

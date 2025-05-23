import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export function About() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sobre Escape GRN</h1>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Inici</Link>
          <Link to="/about" className="nav-link">Sobre el projecte</Link>
          <Link to="/univers" className="nav-link">Univers</Link>
          <Link to="/nivells" className="nav-link">Nivells</Link>
        </nav>
      </header>

      <main className="page-content">
        <p>
          Escape GRN és un videojoc educatiu i d'entreteniment ambientat a la ciutat de Girona.
          Té com a objectiu fer descobrir llocs emblemàtics mentre superes reptes en un món 2D de plataformes.
        </p>
        <p>
          Creat per estudiants apassionats pels videojocs i la cultura local.
        </p>
      </main>
    </div>
  );
}

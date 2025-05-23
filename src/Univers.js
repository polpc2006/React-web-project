import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './Univers.css';

export function Universe() {
  return (
    <div className="App universe">
      <header className="App-header">
        <h1>Univers</h1>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Inici</Link>
          <Link to="/nivells" className="nav-link">Nivells</Link>
          <Link to="/univers" className="nav-link">Univers</Link>
          <Link to="/about" className="nav-link">Sobre el projecte</Link>  
        </nav>
      </header>

      <main className="page-content">
        <p>Aquesta secció està en construcció. Aviat afegirem més informació!</p>
        <table className="universe-table">
          <thead>
            <tr>
              <th>Títol</th>
              <th>Imatge</th>
              <th>Descripció</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Personatge</td>
              <td><img width="500" height="281" src="fp0.png" alt="imatge-personatge-principal" /></td>
              <td>Personatge principal del videojoc</td>
            </tr>
            <tr>
              <td>Rata B</td>
              <td><img width="400" src="/img/rata-b.png" alt="Enemic Rata B" /></td>
              <td>Enemic terrestre que apareix en el Nivell 2</td>
            </tr>
            <tr>
              <td>Rata S</td>
              <td><img width="400" src="/img/rata-s.png" alt="Enemic Rata S" /></td>
              <td>Enemic terrestre que apareix en el Nivell 2</td>
            </tr>
            <tr>
              <td>Mosca</td>
              <td><img width="400" src="/img/mosca.png" alt="Enemic Mosca" /></td>
              <td>Enemic volador que apareix en el Nivell 3</td>
            </tr>
            <tr>
              <td>Policia</td>
              <td><img width="400" src="/img/policia.png" alt="Enemic Policia" /></td>
              <td>Enemic que persegueix al personatge que apareix en el Nivell 3</td>
            </tr>
            <tr>
              <td>Cases de l’Onyar</td>
              <td><img width="400" src="/img/casa-blava.png" alt="Cases de l’Onyar" /></td>
              <td>Escenari inicial del Nivell 3</td>
            </tr>
            <tr>
              <td>Pont Eiffel</td>
              <td><img width="400" src="/img/pont-vermell.png" alt="Pont Eiffel Girona" /></td>
              <td>Estructura famosa de Girona</td>
            </tr>
            <tr>
              <td>Catedral</td>
              <td><img width="400" src="/img/catedral-girona.png" alt="Catedral de Girona" /></td>
              <td>Escenari on el personatge troba a la mosca i agafa el quadre de la cocollona</td>
            </tr>
            <tr>
              <td>Aeroport</td>
              <td><img width="400" src="/img/aeroport.png" alt="Aeroport de Girona" /></td>
              <td>Escenari on el personatge troba al policia i escapa amb avió</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

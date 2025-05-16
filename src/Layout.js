// src/Layout.jsx
import { Link, Outlet } from "react-router-dom";
import './App.css'; // reutilitzem els estils

export function Layout() {
  return (
    <>
      <header className="App-header">
        <h1>DESCOBREIX ESCAPE GRN</h1>
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Inici</Link>
          <Link to="/about" className="nav-link">Sobre el projecte</Link>
          <Link to="/univers" className="nav-link">Univers</Link>
        </nav>
      </header>

      {/* Aquí es mostra el contingut de cada ruta */}
      <main className="page-content">
        <Outlet />
      </main>
    </>
  );
}

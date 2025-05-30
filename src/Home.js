import React from 'react';
import { useLanguage } from './LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Link } from 'react-router-dom';
import logo from './logo-ESGRN.jpg';
import './App.css';

export function Home() {
  const { t } = useLanguage();

  return (
    <div>
      <LanguageSwitcher />

      <div className="App">
        <header className="App-header">
          <h1>{t('titleHome')}</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {t('homeParagraph')}
          </p>

          <nav className="nav-menu">
            <Link to="/" className="nav-link">Inici</Link>
            <Link to="/nivells" className="nav-link">Nivells</Link>
            <Link to="/univers" className="nav-link">Univers</Link>
            <Link to="/about" className="nav-link">Sobre el projecte</Link>
          </nav>

          <div className="App-div">
            <a
              className="App-link"
              href="https://drive.google.com/file/d/1dyJWyHr4D73YMcYMq8C6AXNkdzoRkp-V/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('textdownload')}
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}

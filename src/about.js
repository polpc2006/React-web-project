import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import logo from './logo-ESGRN.jpg';
import './App.css';
import './about.css';

export function About() {
  const { t } = useLanguage();

  return (
    <div>
      <LanguageSwitcher />
      <div className="App">
        <header className="App-header">
          <h1>{t('aboutProject')}</h1>

          <nav className="nav-menu">
            <Link to="/" className="nav-link">{t('home')}</Link>
            <Link to="/nivells" className="nav-link">{t('levels')}</Link>
            <Link to="/univers" className="nav-link">{t('universe')}</Link>
            <Link to="/about" className="nav-link">{t('aboutProject')}</Link>
          </nav>
        </header>

        <main className="page-content">
          <div className="about-content">
            <img src={logo} alt={t('homeImageAlt')} className="about-image" />
            <p>{t('aboutDescription')}</p>
          </div>
        </main>
      </div>
    </div>
  );
}

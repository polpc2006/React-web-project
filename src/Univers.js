import React from 'react';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from './LanguageContext';
import './App.css';
import './Univers.css';

export function Universe() {
  const { t } = useLanguage();

  return (

    <div>
      <LanguageSwitcher/>

      <div className="App universe">
        <header className="App-header">
          <h1>{t('universeTitle')}</h1>
          <nav className="nav-menu">
            <Link to="/" className="nav-link">{t('home')}</Link>
            <Link to="/nivells" className="nav-link">{t('levels')}</Link>
            <Link to="/univers" className="nav-link">{t('universe')}</Link>
            <Link to="/about" className="nav-link">{t('aboutProject')}</Link>
          </nav>
        </header>

        <main className="page-content">
          <p>{t('underConstruction')}</p>
          <table className="universe-table">
            <thead>
              <tr>
                <th>{t('title')}</th>
                <th>{t('image')}</th>
                <th>{t('description')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('character')}</td>
                <td><img width="500" height="281" src="fp0.png" alt="{t('characterDesc')}" /></td>
                <td>{t('characterDesc')}</td>
              </tr>
              <tr>
                <td>{t('ratB')}</td>
                <td><img width="400" src="/img/rata-b.png" alt="Enemic Rata B" /></td>
                <td>{t('ratBDesc')}</td>
              </tr>
              <tr>
                <td>{t('ratS')}</td>
                <td><img width="400" src="/img/rata-s.png" alt="Enemic Rata S" /></td>
                <td>{t('ratSDesc')}</td>
              </tr>
              <tr>
                <td>{t('fly')}</td>
                <td><img width="400" src="/img/mosca.png" alt="Enemic Mosca" /></td>
                <td>{t('flyDesc')}</td>
              </tr>
              <tr>
                <td>{t('police')}</td>
                <td><img width="400" src="/img/policia.png" alt="Enemic Policia" /></td>
                <td>{t('policeDesc')}</td>
              </tr>
              <tr>
                <td>{t('onyarHouses')}</td>
                <td><img width="400" src="/img/casa-blava.png" alt="Cases de l’Onyar" /></td>
                <td>{t('onyarHousesDesc')}</td>
              </tr>
              <tr>
                <td>{t('eiffelBridge')}</td>
                <td><img width="400" src="/img/pont-vermell.png" alt="Pont Eiffel Girona" /></td>
                <td>{t('eiffelBridgeDesc')}</td>
              </tr>
              <tr>
                <td>{t('cathedral')}</td>
                <td><img width="400" src="/img/catedral-girona.png" alt="Catedral de Girona" /></td>
                <td>{t('cathedralDesc')}</td>
              </tr>
              <tr>
                <td>{t('airport')}</td>
                <td><img width="400" src="/img/aeroport.png" alt="Aeroport de Girona" /></td>
                <td>{t('airportDesc')}</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}

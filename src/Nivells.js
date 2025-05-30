import React from 'react';
import { useLanguage } from './LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Link } from 'react-router-dom';
import './Nivells.css';

export function Nivells() {
    const { t } = useLanguage();
    return (
        <div>
            <LanguageSwitcher/>

            <div className="App nivells">
                <header className="App-header">
                    <h1>{t('leveltext')}</h1>
                    <nav className="nav-menu">
                        <Link to="/" className="nav-link">{t('home')}</Link>
                        <Link to="/nivells" className="nav-link">{t('levels')}</Link>
                        <Link to="/univers" className="nav-link">{t('universe')}</Link>
                        <Link to="/about" className="nav-link">{t('aboutProject')}</Link>
                    </nav>
                </header>

                <div className="nivells-container">
                    <h1 className="nivells-title">{t('levelsTitle')}</h1>


                    <div className="video-container">
                        <h2>{t('mechanicsDescription')}</h2>
                        <video controls className="nivell-video">
                            <source src="/vd/mecaniques.mp4" type="video/mp4" />
                            {t('videoNotSupported')}
                        </video>
                    </div>


                    <div className="video-container">
                        <h2>{t('demoVideoTitle')}</h2>
                        <video controls className="nivell-video">
                            <source src="/vd/Demo-Nivell1.mp4" type="video/mp4" />
                            {t('videoNotSupported')}
                        </video>
                    </div>

                    <div className="nivell">
                        <h2>{t('level1Title')}</h2>
                        <p>
                        {t('level1Description')}
                        </p>
                        <img src="/img/Nivell1.jpg" alt={t('level1Title')} className="nivell-img" />
                    </div>

                    <div className="nivell">
                        <h2>{t('level2Title')}</h2>
                        <p>
                        {t('level2Description')}
                        </p>
                        <img src="/img/Nivell2.png" alt="Nivell 2" className="nivell-img" />
                    </div>

                    <div className="nivell">
                        <h2>{t('level3Title')}</h2>
                        <p>
                        {t('level3Description')}
                        </p>
                        <img src="/img/Nivell3.jpg" alt="Nivell 3" className="nivell-img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

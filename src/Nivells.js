import React from 'react';
import { useLanguage } from './LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Link } from 'react-router-dom';
import './Nivells.css';

export function Nivells() {
    const { t } = useLanguage();
    return (
        <div>
            <LanguageSwitcher />

            <div className="App nivells">
                <header className="App-header">
                    <h1>{t('leveltext')}</h1>
                    <nav className="nav-menu">
                        <Link to="/" className="nav-link">Inici</Link>
                        <Link to="/nivells" className="nav-link">Nivells</Link>
                        <Link to="/univers" className="nav-link">Univers</Link>
                        <Link to="/about" className="nav-link">Sobre el projecte</Link>
                    </nav>
                </header>

                <div className="nivells-container">
                    <h1 className="nivells-title">Nivells del Joc</h1>


                    <div className="video-container">
                        <h2>La mecànica del videojoc és de tipus plataforma on el personatge pot saltar i moure’s horitzontalment.</h2>
                        <video controls className="nivell-video">
                            <source src="/vd/mecaniques.mp4" type="video/mp4" />
                            El teu navegador no suporta el vídeo.
                        </video>
                    </div>


                    <div className="video-container">
                        <h2>Vídeo de Demo del Nivell 1</h2>
                        <video controls className="nivell-video">
                            <source src="/vd/Demo-Nivell1.mp4" type="video/mp4" />
                            El teu navegador no suporta el vídeo.
                        </video>
                    </div>

                    <div className="nivell">
                        <h2>Nivell 1</h2>
                        <p>
                            El personatge passa per la muralla de Girona i s’aprenen les mecàniques bàsiques.
                        </p>
                        <img src="/img/Nivell1.jpg" alt="Nivell 1" className="nivell-img" />
                    </div>

                    <div className="nivell">
                        <h2>Nivell 2</h2>
                        <p>
                            Nous enemics i més dificultat. El jugador es trobarà amb la Rata B i la Rata S.
                        </p>
                        <img src="/img/Nivell2.png" alt="Nivell 2" className="nivell-img" />
                    </div>

                    <div className="nivell">
                        <h2>Nivell 3</h2>
                        <p>
                            El personatge passa per la ciutat de Girona i troba estructures icòniques.
                        </p>
                        <img src="/img/Nivell3.jpg" alt="Nivell 3" className="nivell-img" />
                    </div>
                </div>
            </div>
        </div>
    );
}

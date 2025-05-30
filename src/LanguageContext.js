import React, { createContext, useContext, useState, useMemo } from 'react';
import ca from './locales/ca';
import es from './locales/es';

const translations = { ca, es };

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('ca');

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  // Funció t per obtenir la traducció d'una clau
  const t = (key) => {
    return translations[language][key] || key;
  };

  // Optimitzem el valor del context perquè no es recalculi massa
  const contextValue = useMemo(() => ({
    language,
    switchLanguage,
    t
  }), [language]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

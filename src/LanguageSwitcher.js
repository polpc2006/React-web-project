import React from 'react';
import { useLanguage } from './LanguageContext';

export function LanguageSwitcher() {
  const { language, switchLanguage } = useLanguage();

  return (
    <div>
      <button
        onClick={() => switchLanguage('ca')}
        style={{ fontWeight: language === 'ca' ? 'bold' : 'normal' }}
      >
        Català
      </button>
      <button
        onClick={() => switchLanguage('es')}
        style={{ fontWeight: language === 'es' ? 'bold' : 'normal' }}
      >
        Español
      </button>
    </div>
  );
}

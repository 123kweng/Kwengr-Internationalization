// i18n.js

class I18n {
    constructor() {
      this.translations = {};
      this.defaultLanguage = 'en';
      this.currentLanguage = this.defaultLanguage;
    }
  
    setTranslations(language, translations) {
      this.translations[language] = translations;
    }
  
    setLanguage(language) {
      this.currentLanguage = language;
    }
  
    t(key) {
      const language = this.translations[this.currentLanguage];
      if (language && language[key]) {
        return language[key];
      } else {
        const defaultLanguage = this.translations[this.defaultLanguage];
        if (defaultLanguage && defaultLanguage[key]) {
          return defaultLanguage[key];
        } else {
          return key; // Return the key itself if translation not found
        }
      }
    }
  }
  
  // Example Usage:
  const i18n = new I18n();
  
  // Set translations for different languages
  i18n.setTranslations('en', {
    greeting: 'Hello',
    farewell: 'Goodbye'
  });
  
  i18n.setTranslations('fr', {
    greeting: 'Bonjour',
    farewell: 'Au revoir'
  });
  
  // Set the current language
  i18n.setLanguage('en');
  
  // Example: Get translations
  console.log(i18n.t('greeting')); // Output: Hello
  console.log(i18n.t('farewell')); // Output: Goodbye
  
  // Change the current language
  i18n.setLanguage('fr');
  
  // Example: Get translations in French
  console.log(i18n.t('greeting')); // Output: Bonjour
  console.log(i18n.t('farewell')); // Output: Au revoir
  
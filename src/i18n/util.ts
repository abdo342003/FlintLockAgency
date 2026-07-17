import en from './en.json';
import fr from './fr.json';

export const languages = { en: 'English', fr: 'Français' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

const dicts: Record<Lang, Record<string, string>> = { en, fr };

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    return dicts[lang]?.[key] ?? dicts[defaultLang]?.[key] ?? key;
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'fr') return 'fr';
  return defaultLang;
}

const STORAGE_KEY = 'flintlock-lang';

export function getPersistedLang(): Lang {
  if (typeof localStorage === 'undefined') return defaultLang;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'fr') return 'fr';
  return defaultLang;
}

export function persistLang(lang: Lang): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, lang);
  }
}

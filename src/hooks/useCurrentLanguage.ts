import { useTranslation } from 'react-i18next';

const useCurrentLanguage = () => {
  const { i18n } = useTranslation();
  return i18n.language as 'en' | 'pl';
};

export default useCurrentLanguage;
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-4">
      <button onClick={() => changeLanguage("en")} className="px-4 py-2 border rounded">
        English 🇬🇧
      </button>
      <button onClick={() => changeLanguage("pl")} className="px-4 py-2 border rounded">
        Polski 🇵🇱
      </button>
    </div>
  );
};

export default LanguageSwitcher;

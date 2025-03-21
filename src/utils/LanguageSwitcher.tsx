import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-4 hover:text-[#c0c0c0]">
      {i18n?.language == "pl" ? (
        <>
        <button
          onClick={() => changeLanguage("en")}
          className="mx-4 cursor-pointer uppercase"
        >
          EN 🇬🇧
        </button>
        </>
      ) : (
        <>
        <button
          onClick={() => changeLanguage("pl")}
          className="mx-4 cursor-pointer uppercase"
        >
          PL 🇵🇱
        </button>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;

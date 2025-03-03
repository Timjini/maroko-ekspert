import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">{t("welcome")}</h1>
      <p>{t("description")}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
        {t("button_book")}
      </button>
    </div>
  );
};

export default Home;

import { useTranslation } from "react-i18next";
import MainButton from "../components/MainButton";

const Solutions: React.FC = () => {
  const API_BUCKET = import.meta.env.VITE_PUBLIC_BUCKET_URL;

  const { t } = useTranslation();
  const solutions = t("solutions", { returnObjects: true }) as {
    title: string;
    description: string;
    image: string;
    url: string;
  }[];

  const handleRedirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">{t("solution.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center" key={index}>
              <img
                src={API_BUCKET + solution.image}
                alt={solution.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="min-h-72 flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{solution.title}</h3>
                <p className="text-gray-600 py-4">{solution.description}</p>
                <MainButton title="Learn More" onClick={() => handleRedirect(solution.url)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;

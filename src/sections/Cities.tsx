import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MainButton from "../components/MainButton";

const Cities = () => {
  const { t } = useTranslation();
  const cities = t("cities", { returnObjects: true }) as { name: string; description: string; image: string, city:string }[];
  const navigate = useNavigate();

  const navigateToCity = (cityName: string) => {
    navigate(`/cities/${cityName}`);
  };

  return (
    <section id="tours" className="flex items-center justify-center min-h-[100vh]">
      <div className="container mx-auto text-center max-w-screen-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">{t("city.title")}</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city) => (
            <div key={city.name} className="bg-white p-6 shadow-lg rounded-lg">
              <img src={city.image} alt={city.name} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">{city.name}</h3>
              <p className="mt-4 text-balance">{city.description}</p>
              <MainButton title={city.name} onClick={() => navigateToCity(city.city)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cities;

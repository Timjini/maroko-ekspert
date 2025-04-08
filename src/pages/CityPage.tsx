import React from "react";
import TourSidebar from "../components/TourSidebar";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import useFetchTours from "../hooks/useFetchTours";
import { formatMediaImage } from "../utils";
import useCurrentLanguage from "../hooks/useCurrentLanguage";
import { useTranslation } from "react-i18next";
import Loader from "../components/Loader"; // Import your Loader component

const CityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { filteredTours, loading, error, handleSearch } = useFetchTours(slug);
  console.log("loading", loading);
  const { t } = useTranslation();
  const currentCity = t(`common.${slug ?? 'Result'}`);

  const currentLanguage = useCurrentLanguage();
  const formattedTours = filteredTours?.map((tour) => {
    return {
      _id: tour._id,
      title: currentLanguage === "en" ? tour.title_en : tour.title_pl,
      city: tour.city,
      description:
        currentLanguage === "en" ? tour.description_en : tour.description_pl,
      price: tour.price,
      imageUrl: formatMediaImage(tour?.imageUrls[0]) || "",
    };
  });

  // Show loader while loading
  if (loading) return <Loader />;
  
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="toursContainer flex flex-col md:flex-row pt-20 min-h-screen">
      <TourSidebar onSearch={handleSearch} />

      <div className="flex-1 p-4 mt-12">
        <h1 className="text-2xl font-semibold mb-4 text-center capitalize">
          {currentCity || "Available Tours"}
        </h1>
        {formattedTours.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {formattedTours.map((tour) => (
              <Card
                key={tour._id}
                title={tour.title}
                city={tour.city}
                content={tour.description.slice(0, 150) + "..."}
                price={tour.price}
                imageUrl={tour.imageUrl}
                _id={tour._id}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-row justify-center mx-auto content-center align-middle">
            <h1 className="text-xl font-semibold mb-4">No tours Found !</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default CityPage;
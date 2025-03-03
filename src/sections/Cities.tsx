import MainButton from "../components/MainButton";
import { cities } from "../utils/data/cities";

const Cities = () => {
  return (
    <section id="tours" className="flex items-center justify-center min-h-[100vh]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold">Top Tours by Location</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city) => (
            <div key={city.name} className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{city.name}</h3>
              <p className="mt-4">{city.description}</p>
              <MainButton title={city.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cities;

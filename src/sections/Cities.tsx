import MainButton from "../components/MainButton";

const Cities = () => {
  return (
    <section id="tours" className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold">Top Tours by Location</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Agadir</h3>
            <p className="mt-4">
              Explore the beauty of Agadir with expert local guides.
            </p>
            <MainButton title="Agadir" />
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Marrakech</h3>
            <p className="mt-4">
              Discover the vibrant culture of Marrakech and its surroundings.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Essaouira</h3>
            <p className="mt-4">
              Visit the stunning coastal town of Essaouira with our expert
              guides.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cities;
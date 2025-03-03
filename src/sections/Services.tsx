const Services = () => {
  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Guided Tours</h3>
            <p className="mt-4">
              Expert-led, tailored tours across Morocco with a focus on
              Polish-speaking guides.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Cultural Experiences</h3>
            <p className="mt-4">
              Immerse yourself in authentic Moroccan culture, from food to local
              traditions.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Mobile App Guide</h3>
            <p className="mt-4">
              Stay connected with your guide in real-time through our mobile
              app, enhancing your experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

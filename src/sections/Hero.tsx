const Hero = () => {
  return (
    <section id="hero" className="relative bg-cover bg-center h-96 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">
            Discover Authentic Moroccan Tours
          </h1>
          <p className="mt-4 text-xl">
            Maroko Ekspert offers professional tours, excursions, and authentic
            activities in Morocco. Now in Polish!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

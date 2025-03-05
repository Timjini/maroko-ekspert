import MainButton from "../components/MainButton";

const Hero = () => {
  return (
    <div
    className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=3867&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"
  >
    <div className="absolute inset-0 bg-opacity-50"></div>

    <div className="relative z-10 text-center text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Discover Authentic Moroccan Tours
      </h1>
      <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
      Maroko Ekspert offers professional tours, excursions, and authentic
      activities in Morocco. Now in Polish!
      </p>
      <MainButton title="Explore Tours" />
    </div>
  </div>
  );
};

export default Hero;
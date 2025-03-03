const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold">About Us</h2>
        <p className="mt-6 text-lg">
          Maroko Ekspert is led by El Ouafi, with over 15 years of experience in
          travels and tours between Morocco and Poland.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="path/to/guide1.jpg"
              alt="Guide 1"
              className="w-32 h-32 rounded-full mx-auto"
            />
            <p className="mt-4 font-semibold">El Ouafi</p>
            <p className="text-sm text-gray-500">Founder and Lead Guide</p>
          </div>
          <div className="text-center">
            <img
              src="path/to/guide2.jpg"
              alt="Guide 2"
              className="w-32 h-32 rounded-full mx-auto"
            />
            <p className="mt-4 font-semibold">Guide 2</p>
            <p className="text-sm text-gray-500">
              Certified Polish-speaking Guide
            </p>
          </div>
          <div className="text-center">
            <img
              src="path/to/guide3.jpg"
              alt="Guide 3"
              className="w-32 h-32 rounded-full mx-auto"
            />
            <p className="mt-4 font-semibold">Guide 3</p>
            <p className="text-sm text-gray-500">
              Certified Polish-speaking Guide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
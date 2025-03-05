import MainButton from "../components/MainButton";

interface Solution {
  title: string;
  description: string;
  image: string;
}

const Solutions: React.FC = () => {
  const solutions: Solution[] = [
    {
      title: "Polish-speaking Tour Guides",
      description: "Led by El Ouafi, a professional in the field, ensuring a knowledgeable and engaging experience.",
      image: "/path/to/solution1.jpg",
    },
    {
      title: "Unique and Authentic Tours",
      description: "Immerse yourself in real Moroccan culture and cuisine with our carefully curated tours.",
      image: "/path/to/solution2.jpg",
    },
    {
      title: "E-Guide Solutions",
      description: "Stay connected with live communication and activity progress tracking through our mobile app.",
      image: "/path/to/solution3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center" key={index}>
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="min-h-72 flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{solution.title}</h3>
                <p className="text-gray-600 py-4">{solution.description}</p>
                <MainButton title="Learn More" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;

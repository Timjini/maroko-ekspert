import {services} from '../utils/data/services';

const Services = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div id="services" className="container item-center mx-auto  max-w-screen-xl grid grid-cols-1 lg:grid-cols-3 items-center min-h-[100vh]">
        <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase">Our Services</h2>
        </div>
        <div className=" col-span-2 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          { services.map((service,index) => (
             <div key ={index} className="bg-white p-6 shadow-lg rounded-lg">
             <h3 className="text-xl font-semibold">{service.title}</h3>
             <p className="mt-4">
               {service.description}
             </p>
           </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

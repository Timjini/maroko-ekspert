import React from "react";
import ActionButton from "../components/ActionButton";

interface AboutProps {
  toggleModal: () => void;
}

const About: React.FC<AboutProps> = ({ toggleModal }) => {
  return (
    <section id="about" className="min-h-screen bg-white flex items-center justify-center py-12">
      <div className="mx-auto px-4 container grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-screen-xl">
        <div className="mb-6 md:mb-0 mx-8 md:mx-18">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase">About Us</h2>
          <p className=" text-md text-balance">
          <strong>Maroko Ekspert</strong> is led by <strong>El Ouafi</strong>, a seasoned professional with over 15 years of experience in travel and tourism between Morocco and Poland. With a deep understanding of both cultures, El Ouafi specializes in creating authentic and memorable travel experiences. His expertise ensures that each tour is carefully crafted to showcase the best of Moroccan heritage, cuisine, and hospitality.<br/>
          </p>
        </div>
        <div className="mx-8 md:mx-18">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase">Information</h2>
            <h3 className="text-md text-balance font-bold">Address:</h3>
            <span className="mt-2 text-md text-balance">N°15, 4éme Etage, Imm. Inflass, Bd Abderrahim Bouabid,<br/> Agadir 80000, Morocco</span>
          <div className="flex flex-col">
            <h3 className="mt-2 text-md font-bold">Email:</h3>
            <span className=" text-md text-balance">biuro@maroko-ekspert.pl</span>
          </div>
          <div className="flex flex-col">
            <h3 className="mt-2 text-md font-bold">Phone:</h3>
            <span className=" text-md text-balance">+48 725 648 880</span>
            <span className=" text-md text-balance">+212 6245 887 41</span>
          </div>
          <ActionButton title="Contact Us" action={toggleModal} />
        </div>
      </div>
    </section>
  );
};

export default About;

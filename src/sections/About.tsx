import React from "react";
import ActionButton from "../components/ActionButton";

interface AboutProps {
  toggleModal: () => void;
}

const About: React.FC<AboutProps> = ({ toggleModal }) => {
  return (
    <section id="about" className="min-h-screen bg-white flex items-center justify-center py-12">
      <div className="mx-auto px-4 container grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-screen-xl">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase">About Us</h2>
          <p className="mt-6 text-md text-balance">
            Maroko Ekspert is led by El Ouafi, with over 15 years of experience in
            travels and tours between Morocco and Poland.
          </p>
        </div>
        <div className="divPadding">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase">Information</h2>
          <div>
            <h3 className="text-xl md:text-2xl ">Address:</h3>
            <span className="mt-2 text-md text-balance">N°15, 4éme Etage, Imm. Inflass,<br/> Bd Abderrahim Bouabid,<br/> Agadir 80000, Morocco</span>
          </div>
          <div className="flex flex-col">
            <h3 className="mt-2 text-xl md:text-2xl ">Phone:</h3>
            <span className=" text-md text-balance">+(212) 5282 370 38</span>
            <span className=" text-md text-balance">+(212) 6245 887 41</span>
          </div>
          <ActionButton title="Contact Us" action={toggleModal} />
        </div>
      </div>
    </section>
  );
};

export default About;

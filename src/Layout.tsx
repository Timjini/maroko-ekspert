import { useState } from 'react';
import { Hero, Solutions, Services, Cities, About } from './sections';
import ContactModal from './modals/ContactModal';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };
  return (
    <>
      {/* <Home /> */}
      <Hero  toggleModal={toggleModal}/>
      <Solutions />
      <Services />
      <section className="bg-gradient-to-br from-[#fdf6ec] via-[#fbe4c1] to-[#f6c68a]">
        <Cities />
        <About  toggleModal={toggleModal}/>
      </section>
      <ContactModal isOpen={isOpen} toggleModal={toggleModal} />

    </>
  );
};

export default Layout;

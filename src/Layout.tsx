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
      <Cities />
      <About  toggleModal={toggleModal}/>
      <ContactModal isOpen={isOpen} toggleModal={toggleModal} />

    </>
  );
};

export default Layout;

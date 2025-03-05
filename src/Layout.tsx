import { useState } from 'react';
import { Nav, Hero, Solutions, Services, Cities, About, Footer } from './sections';
import ContactModal from './modals/ContactModal';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    console.log("clicked")
    setIsOpen(prevState => !prevState);
  };
  return (
    <>
      <Nav />
      {/* <Home /> */}
      <Hero />
      <Solutions />
      <Services />
      <Cities />
      <About  toggleModal={toggleModal}/>
      <Footer />
      <ContactModal isOpen={isOpen} toggleModal={toggleModal} />

    </>
  );
};

export default Layout;

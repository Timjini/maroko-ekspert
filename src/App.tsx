import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import CityPage from './pages/CityPage';
import { Footer, Nav } from './sections';
import TourDetailPage from './pages/TourDetailPage';

function App() {
  return (
    <Router future={{ v7_startTransition: true }}>
       <Nav />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/cities/:slug?" element={<CityPage />} />
        <Route path="/tours/:slug" element={<TourDetailPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

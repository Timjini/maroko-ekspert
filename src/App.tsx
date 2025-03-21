import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import CityPage from './pages/CityPage';
import { Footer, Nav } from './sections';
import TourDetailPage from './pages/TourDetailPage';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Router future={{  v7_startTransition: true,
                         v7_relativeSplatPath: true,}}>
        <Nav />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/cities/:slug?" element={<CityPage />} />
            <Route path="/tours/:slug" element={<TourDetailPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import FeaturedJobs from './company/FeaturedJobs';
import TopCategories from './Topcategoriesjb/TopCategories';
import StatsSection from './Topcategoriesjb/StatsSection';
import Features from './Topcategoriesjb/Features';
import FeaturesReversed from './Topcategoriesjb/FeaturesReversed';
import SignIn from './pages/SignIn';
import Register from './pages/Register';

const Home = () => (
  <div className="bg-gray-100 min-h-screen">
    <Banner />
    <FeaturedJobs />
    <TopCategories />
    <Features />
    <FeaturesReversed />
    <StatsSection />
  </div>
);

const OverlayRoutes = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Overlays */}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <OverlayRoutes />
    </Router>
  );
}

export default App;

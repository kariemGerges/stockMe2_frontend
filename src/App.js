import './index.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// import components
import Header from './components/Header';
import Footer from './components/Footer';
import PrivcyTerms from './components/PrivacyTerms';

// import pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import AboutUs from './pages/AboutUs';
import MarketInsights from './pages/MarketInsights';
import ErrLanding from './pages/ErrLanding';
import Predictions from './pages/Predictions';

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/insights" element={<MarketInsights />} />
        <Route path="/PrivacyAndTerms" element={<PrivcyTerms />} />
      <Route path="/prediction" element={<Predictions />} />
              {/* catch all other routes */}
              <Route path='/ErrLanding' element={<ErrLanding />} />
            <Route path="*" element={<ErrLanding />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;

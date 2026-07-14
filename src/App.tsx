import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Members from './pages/Members';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/members" element={<Members />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<TermsAndConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
// Force IDE sync

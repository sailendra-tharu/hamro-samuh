import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Members from './pages/Members';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/TermsAndConditions';
import './App.css';

const pageMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Hamro Samuh | Community Savings Organization',
    description: 'Hamro Samuh helps members save regularly, access responsible financial support, and build a stronger financial future together.',
  },
  '/about': {
    title: 'About Hamro Samuh | Community Savings Organization',
    description: 'Learn about Hamro Samuh, our mission, values, and commitment to transparent community savings and financial empowerment.',
  },
  '/services': {
    title: 'Services | Hamro Samuh',
    description: 'Explore Hamro Samuh services supporting community development, education, health, livelihoods, and social awareness.',
  },
  '/members': {
    title: 'Our Members | Hamro Samuh',
    description: 'Meet the members who make Hamro Samuh a strong, supportive, and growing community.',
  },
  '/contact': {
    title: 'Contact Hamro Samuh',
    description: 'Get in touch with Hamro Samuh for questions about membership, savings, services, and community support.',
  },
  '/terms': {
    title: 'Terms and Conditions | Hamro Samuh',
    description: 'Read the rules and conditions for participating in Hamro Samuh savings and loan programs.',
  },
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] ?? pageMetadata['/'];
    document.title = metadata.title;

    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }
    description.content = metadata.description;

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}${pathname}`;
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <RouteMetadata />
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

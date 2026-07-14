import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandCol}>
          <Link to="/" className={styles.logo}>
            <img src="/logo.png" alt="Hamro Samuh" className={styles.logoImage} />
            <span className={styles.logoName}>Hamro Samuh</span>
          </Link>
          <p className={styles.description}>
            Empowering communities and fostering growth through collective effort and shared vision.
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Twitter">X</a>
            <a href="#" aria-label="Instagram">IG</a>
          </div>
        </div>

        <div className={styles.linksCol}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/members">Members</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className={styles.contactCol}>
          <h3>Contact Us</h3>
          <ul>
            <li><MapPin size={18} /> Kathmandu, Nepal</li>
            <li><Phone size={18} /> +977 123 456 789</li>
            <li><Mail size={18} /> info@hamrosamuh.org</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Hamro Samuh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

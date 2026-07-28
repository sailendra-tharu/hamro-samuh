import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <section className={styles.brandCol} aria-labelledby="footer-brand-title">
          <Link to="/" className={styles.logo}>
            <img src="/logo.png" alt="Hamro Samuh" className={styles.logoImage} />
            <span id="footer-brand-title" className={styles.logoName}>Hamro Samuh</span>
          </Link>
          <p className={styles.description}>
At Hamro Samuh, we believe that every small contribution has the power to create meaningful change. By combining the strength of our members with transparent financial management, responsible savings, and community-focused lending, we work together to improve lives, encourage economic stability, and build a prosperous future rooted in trust, unity, and mutual support.          </p>
          <nav className={styles.socials} aria-label="Social media links">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.socialIcon}>
                <path d="M24 12.073C24 5.446 18.627.073 12 .073S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.socialIcon}>
                <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok">
              <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.socialIcon}>
                <path d="M16.525.02c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.98-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.56 3.17-5.89 3.2-1.47.08-2.96-.32-4.19-1.07-2.05-1.25-3.31-3.67-3.24-6.05.04-1.47.54-2.93 1.42-4.11 1.26-1.69 3.36-2.79 5.47-2.82.04 1.48-.04 2.96-.04 4.44-1 .32-2.22.23-2.84 1.17-.45.61-.32 1.54.22 2.07.54.58 1.45.78 2.18.42.71-.34 1.11-1.09 1.1-1.86.03-3.32.02-6.63.02-9.95.01-2.37-.01-4.73.06-7.1 1.31-.02 2.61-.01 3.91-.02Z" />
              </svg>
            </a>
          </nav>
        </section>

        <nav className={styles.linksCol} aria-labelledby="footer-links-title">
          <h3 id="footer-links-title">Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/members">Members</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </nav>

        <section className={styles.contactCol} aria-labelledby="footer-contact-title">
          <h3 id="footer-contact-title">Contact Us</h3>
          <address>
            <ul>
              <li><MapPin size={18} /> <span>Shankarsaraiya, Birgunj, Nepal</span></li>
              <li><Phone size={18} /> <a href="tel:+9779823092963">+977 9823092963</a></li>
              <li><Mail size={18} /> <a href="mailto:support.hamrosamuh@gmail.com">support.hamrosamuh@gmail.com</a></li>
            </ul>
          </address>
        </section>
      </div>
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Hamro Samuh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

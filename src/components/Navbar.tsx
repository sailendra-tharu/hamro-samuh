import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, UserPlus } from "lucide-react";
import styles from "./Navbar.module.css";
import { useLanguage } from "../context/LanguageContext";

const navLinks = [
  { key: "nav.home", path: "/" },
  { key: "nav.about", path: "/about" },
  { key: "nav.services", path: "/services" },
  { key: "nav.members", path: "/members" },
  { key: "nav.contact", path: "/contact" },
  { key: "nav.terms", path: "/terms" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.glass : ""
        }`}
    >
      <div className={`container ${styles.navContainer}`}>

        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img
            src="/logo.png"
            alt={t('brand.name')}
            className={styles.logoIconImage}
            width={150}
            height={150}
          />

          <div className={styles.logoText}>
            <span className={styles.logoTitle}>
              {t('brand.name')}
            </span>

            <span className={styles.logoSubtitle}>
              {t('brand.tagline')}
            </span>
          </div>
        </Link>


        {/* Desktop Navigation */}
        <nav
          className={styles.desktopNav}
          aria-label={t('nav.primaryNavigation')}
        >
          {navLinks.map((link) => (
            <Link
              key={link.key}
              to={link.path}
              className={`${styles.navLink} ${location.pathname === link.path
                  ? styles.active
                  : ""
                }`}
              aria-current={location.pathname === link.path ? "page" : undefined}
            >
              {t(link.key)}

              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className={styles.underline}
                />
              )}
            </Link>
          ))}
        </nav>


        {/* Desktop Login */}
        <div className={styles.actions}>
          <select
            className={styles.languageSelect}
            value={language}
            onChange={(event) => setLanguage(event.target.value === 'np' ? 'np' : 'en')}
            aria-label={t('nav.language')}
          >
            <option value="en">{t('nav.english')}</option>
            <option value="np">{t('nav.nepali')}</option>
          </select>
          <a
            href="https://samuh.netlify.app/login"
            className={styles.solidBtn}
          >
            <UserPlus size={20} />
            {t('nav.login')}
          </a>
        </div>


        {/* Mobile Menu Button */}
        <button
          className={styles.mobileToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={t('nav.toggleMenu')}
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

      </div>


      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />


            {/* Drawer */}
            <motion.aside
              className={styles.mobileMenu}
              initial={{
                x: "-100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "-100%",
              }}
              transition={{
                duration: 0.3,
              }}
            >

              {/* Mobile Header */}
              <div className={styles.mobileHeader}>

                <Link
                  to="/"
                  className={styles.mobileLogo}
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    src="/logo.png"
                    alt={t('brand.name')}
                    className={styles.logoIconImage}
                  />

                  <div className={styles.logoText}>
                    <span className={styles.logoTitle}>
                      {t('brand.name')}
                    </span>

                    <span className={styles.logoSubtitle}>
                      {t('brand.tagline')}
                    </span>
                  </div>
                </Link>

              </div>



              {/* Mobile Links */}
              <nav className={styles.mobileNav}>

                {navLinks.map((link) => (
                  <Link
                    key={link.key}
                    to={link.path}
                    className={`${styles.mobileLink} ${location.pathname === link.path
                        ? styles.active
                        : ""
                      }`}
                    aria-current={location.pathname === link.path ? "page" : undefined}
                    onClick={() =>
                      setIsOpen(false)
                    }
                  >
                  {t(link.key)}
                  </Link>
                ))}

              </nav>



              {/* Mobile Login */}
              <div className={styles.mobileActions}>
                <select
                  className={styles.languageSelectMobile}
                  value={language}
                  onChange={(event) => setLanguage(event.target.value === 'np' ? 'np' : 'en')}
                  aria-label={t('nav.language')}
                >
                  <option value="en">{t('nav.english')}</option>
                  <option value="np">{t('nav.nepali')}</option>
                </select>
                <a
                  href="https://samuh.netlify.app/login"
                  className={styles.solidBtnMobile}
                  onClick={() => setIsOpen(false)}
                >
                  <UserPlus size={20} />
                  {t('nav.login')}
                </a>
              </div>


            </motion.aside>

          </>
        )}
      </AnimatePresence>

    </header>
  );
}

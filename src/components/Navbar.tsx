import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, UserPlus } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Members", path: "/members" },
  { name: "Contact", path: "/contact" },
  { name: "Terms & Conditions", path: "/terms" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const loginUrl = "https://samuh.netlify.app/login";

  return (
    <header className={`${styles.header} ${scrolled ? "glass" : ""}`}>
      <div className={`container ${styles.navContainer}`}>

        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img
            src="/logo.png"
            alt="Hamro Samuh Logo"
            className={styles.logoIconImage}
            width={150}
            height={150}
          />

          <div className={styles.logoText}>
            <span className={styles.logoTitle}>
              HAMRO SAMUH
            </span>

            <span className={styles.logoSubtitle}>
              Together We Grow
            </span>
          </div>
        </Link>


        {/* Desktop Navigation */}
        <nav
          className={styles.desktopNav}
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${styles.navLink} ${
                location.pathname === link.path
                  ? styles.active
                  : ""
              }`}
            >
              {link.name}

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
          <a
            href={loginUrl}
            className={styles.solidBtn}
          >
            <UserPlus size={20} />
            Login
          </a>
        </div>


        {/* Mobile Menu Button */}
        <button
          className={styles.mobileToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
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

              {/* Mobile Logo */}
              <div className={styles.mobileHeader}>

                <div className={styles.mobileLogo}>

                  <img
                    src="/logo.png"
                    alt="Hamro Samuh"
                    className={styles.logoIconImage}
                  />

                  <div className={styles.logoText}>
                    <span className={styles.logoTitle}>
                      HAMRO SAMUH
                    </span>

                    <span className={styles.logoSubtitle}>
                      Together We Grow
                    </span>
                  </div>

                </div>

              </div>



              {/* Mobile Links */}
              <nav
                className={styles.mobileNav}
              >

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`${styles.mobileLink} ${
                      location.pathname === link.path
                        ? styles.active
                        : ""
                    }`}
                    onClick={() =>
                      setIsOpen(false)
                    }
                  >
                    {link.name}
                  </Link>
                ))}

              </nav>



              {/* Mobile Login */}
              <div className={styles.mobileActions}>

                <a
                  href={loginUrl}
                  className={styles.solidBtnMobile}
                  onClick={() =>
                    setIsOpen(false)
                  }
                >

                  <UserPlus size={20} />

                  Login

                </a>

              </div>


            </motion.aside>

          </>
        )}

      </AnimatePresence>

    </header>
  );
}
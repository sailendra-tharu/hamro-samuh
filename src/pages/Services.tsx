import { motion } from 'framer-motion';
import { Users, GraduationCap, HeartPulse, Briefcase, Megaphone, ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const services = [
  {
    icon: <Users />,
    title: "Community Development",
    desc: "We work for the overall development of communities through participation and local empowerment.",
    image: "/service-community.png"
  },
  {
    icon: <GraduationCap />,
    title: "Education Support",
    desc: "We support quality education by providing resources, training, and opportunities for a better future.",
    image: "/service-education.png"
  },
  {
    icon: <HeartPulse />,
    title: "Health & Wellness",
    desc: "We promote good health and well-being through awareness programs and health initiatives.",
    image: "/service-health.png"
  },
  {
    icon: <Briefcase />,
    title: "Livelihood Support",
    desc: "We help people build skills and access opportunities for sustainable income and growth.",
    image: "/service-livelihood.png"
  },
  {
    icon: <Megaphone />,
    title: "Advocacy & Awareness",
    desc: "We raise awareness and advocate for positive change on important social issues.",
    image: "/service-advocacy.png"
  }
];

export default function Services() {
  return (
    <div className={styles.services}>

      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroImageContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.heroGradientMask}></div>
          <img
            src="/services-hero.png"
            alt="Hands together showing unity"
            className={styles.heroImage}
          />
        </motion.div>

        <div className={`container ${styles.heroContainer}`}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeIn} className={styles.preTitle}>
            </motion.span>
            <motion.h1 variants={fadeIn} className={styles.title}>
              Working Together <br /> for a Better Tomorrow
            </motion.h1>
            <motion.p variants={fadeIn} className={styles.description}>
              At Hamro Samuh, we provide services that empower communities, promote growth, and create sustainable impact.
            </motion.p>
            <motion.div variants={fadeIn}>
              <a href="#core-services" className={styles.solidBtn}>
                Explore Our Services <ArrowRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Mission Card */}
        <motion.div
          className={styles.missionCard}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className={styles.missionIconBox}>
            <Users size={28} />
          </div>
          <h3>Our Mission</h3>
          <div className={styles.missionDivider}></div>
          <p>Empowering people and communities through collaboration, support, and sustainable solutions.</p>
        </motion.div>
      </section>

      {/* Core Services */}
      <section id="core-services" className={styles.coreSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.preTitleCenter}>
              WHAT WE DO <span className={styles.preTitleLine}>—</span>
            </span>
            <h2>Our Core Services</h2>
          </div>

          <motion.div
            className={styles.coreGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((srv, i) => (
              <motion.div key={i} className={styles.coreCard} variants={fadeIn}>
                <div className={styles.coreCardTop}>
                  <div className={styles.coreIconBox}>{srv.icon}</div>
                  <h3>{srv.title}</h3>
                  <p>{srv.desc}</p>
                </div>
                <div className={styles.coreCardImage}>
                  <img src={srv.image} alt={srv.title} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.bottomCta}>
        <div className="container">
          <div className={styles.ctaBanner}>
            <div className={styles.ctaLeft}>
              <div className={styles.ctaItem}>
                <div className={styles.ctaIconBox}><Users size={24} /></div>
                <div>
                  <h4>Together, we can create</h4>
                  <p>stronger communities.</p>
                </div>
              </div>
              <div className={styles.ctaItem}>
                <div className={styles.ctaIconBox}><Heart size={24} /></div>
                <div>
                  <h4>Be part of the change.</h4>
                  <p>Join us today!</p>
                </div>
              </div>
            </div>
            <Link to="/contact" className={styles.ctaBtn}>
              Get Involved <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

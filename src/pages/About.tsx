import { motion } from 'framer-motion';
import { Users, ShieldCheck, TrendingUp, Target, Handshake, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function About() {
  return (
    <div className={styles.about}>

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
            src="/about-hero.png"
            alt="Hamro Samuh community members"
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
            <motion.h1 variants={fadeIn} className={styles.title}>
              <span className={styles.titleHighlight}>Hamro Samuh</span>
            </motion.h1>
            <motion.div variants={fadeIn} className={styles.titleBar}></motion.div>
            <motion.p variants={fadeIn} className={styles.description}>
              Hamro Samuh is a community-based organization that brings people together to save regularly, support each other, and build a stronger financial future.
            </motion.p>
            <motion.p variants={fadeIn} className={styles.description}>
              We believe that when people come together with trust and transparency, small contributions can create a big impact.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link to="/members" className={styles.solidBtn}>
                <Users size={18} /> Our Members, Our Strength
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className={styles.valuesSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Mission & Values</h2>

          <motion.div
            className={styles.valuesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: <Users />, title: "Togetherness", desc: "We believe in unity and collective growth. Together, we can achieve more." },
              { icon: <ShieldCheck />, title: "Trust & Transparency", desc: "We operate with honesty and transparency to build strong and lasting relationships." },
              { icon: <TrendingUp />, title: "Financial Empowerment", desc: "We encourage regular saving and smart financial habits for a better tomorrow." },
              { icon: <Target />, title: "Our Goal", desc: "To create a self-reliant community where everyone can grow and prosper." }
            ].map((item, i) => (
              <motion.div key={i} className={styles.valueCard} variants={fadeIn}>
                <div className={styles.valueIconBox}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Banner */}
      <section className={styles.impactSection}>
        <div className="container">
          <motion.div
            className={styles.impactBanner}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.impactText}>
              <h2>Together, we create real impact</h2>
              <p>Small savings today, stronger community tomorrow.</p>
            </div>
            <div className={styles.impactStats}>
              <div className={styles.impactStatItem}>
                <div className={styles.impactStatIcon}><Users size={22} /></div>
                <div>
                  <h4>250+</h4>
                  <span>Active Members</span>
                </div>
              </div>
              <div className={styles.impactStatItem}>
                <div className={styles.impactStatIcon}><TrendingUp size={22} /></div>
                <div>
                  <h4>Rs. 2.5M+</h4>
                  <span>Total Savings</span>
                </div>
              </div>
              <div className={styles.impactStatItem}>
                <div className={styles.impactStatIcon}><Globe size={22} /></div>
                <div>
                  <h4>40+</h4>
                  <span>Groups</span>
                </div>
              </div>
              <div className={styles.impactStatItem}>
                <div className={styles.impactStatIcon}><Handshake size={22} /></div>
                <div>
                  <h4>100%</h4>
                  <span>Trust & Commitment</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className={styles.quoteSection}>
        <div className="container">
          <motion.div
            className={styles.quoteBox}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.quoteMarkLeft}>&ldquo;</span>
            <p className={styles.quoteText}>
              <em>Alone we can do so little; together we can do so much.</em>
            </p>
            <span className={styles.quoteMarkRight}>&rdquo;</span>
            <p className={styles.quoteAuthor}>– Helen Keller</p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

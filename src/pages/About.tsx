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
    <article className={styles.about}>

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="about-title">
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
            <motion.h1 id="about-title" variants={fadeIn} className={styles.title}>
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
      <section className={styles.valuesSection} aria-labelledby="values-title">
        <div className="container">
          <h2 id="values-title" className={styles.sectionTitle}>Our Mission & Values</h2>

          <motion.ul
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
              <li key={i}>
                <motion.article className={styles.valueCard} variants={fadeIn}>
                  <div className={styles.valueIconBox} aria-hidden="true">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.article>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Impact Banner */}
      <section className={styles.impactSection} aria-labelledby="impact-title">
        <div className="container">
          <motion.div
            className={styles.impactBanner}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.impactText}>
              <h2 id="impact-title">Together, we create real impact</h2>
              <p>Small savings today, stronger community tomorrow.</p>
            </div>
            <dl className={styles.impactStats}>
              <div className={styles.impactStatItem}>
                <div className={styles.impactStatIcon}><Users size={22} /></div>
                <div>
                  <dd>250+</dd>
                  <dt>Active Members</dt>
                </div>
              </div>
              <div className={styles.impactStatItem}>
                <div className={styles.impactStatIcon}><TrendingUp size={22} /></div>
                <div>
                  <dd>Rs. 2.5M+</dd>
                  <dt>Total Savings</dt>
                </div>
              </div>
              <div className={styles.impactStatItem}>
                <div className={styles.impactStatIcon}><Globe size={22} /></div>
                <div>
                  <dd>40+</dd>
                  <dt>Groups</dt>
                </div>
              </div>
              <div className={styles.impactStatItem}>
                <div className={styles.impactStatIcon}><Handshake size={22} /></div>
                <div>
                  <dd>100%</dd>
                  <dt>Trust & Commitment</dt>
                </div>
              </div>
            </dl>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className={styles.quoteSection} aria-label="Hamro Samuh quote">
        <div className="container">
          <motion.blockquote
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
            <cite className={styles.quoteAuthor}>– Helen Keller</cite>
          </motion.blockquote>
        </div>
      </section>

    </article>
  );
}

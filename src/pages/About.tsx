import { motion } from 'framer-motion';
import { Users, ShieldCheck, TrendingUp, Target, Handshake, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';
import { useLanguage } from '../context/LanguageContext';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function About() {
  const { t } = useLanguage();

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
              <span className={styles.titleHighlight}>{t('brand.name')}</span>
            </motion.h1>
            <motion.div variants={fadeIn} className={styles.titleBar}></motion.div>
            <motion.p variants={fadeIn} className={styles.description}>
              {t('about.hero.description1')}
            </motion.p>
            <motion.p variants={fadeIn} className={styles.description}>
              {t('about.hero.description2')}
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link to="/members" className={styles.solidBtn}>
                <Users size={18} /> {t('about.hero.button')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className={styles.valuesSection} aria-labelledby="values-title">
        <div className="container">
          <h2 id="values-title" className={styles.sectionTitle}>{t('about.values.heading')}</h2>

          <motion.ul
            className={styles.valuesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { icon: <Users />, titleKey: 'about.value.togetherness', descKey: 'about.value.togetherness.desc' },
              { icon: <ShieldCheck />, titleKey: 'about.value.trust', descKey: 'about.value.trust.desc' },
              { icon: <TrendingUp />, titleKey: 'about.value.empowerment', descKey: 'about.value.empowerment.desc' },
              { icon: <Target />, titleKey: 'about.value.goal', descKey: 'about.value.goal.desc' }
            ].map((item, i) => (
              <li key={i}>
                <motion.article className={styles.valueCard} variants={fadeIn}>
                  <div className={styles.valueIconBox} aria-hidden="true">{item.icon}</div>
                  <h3>{t(item.titleKey)}</h3>
                  <p>{t(item.descKey)}</p>
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
              <h2 id="impact-title">{t('about.impact.heading')}</h2>
              <p>{t('about.impact.description')}</p>
            </div>
            <dl className={styles.impactStats}>
              <div className={styles.impactStatItem}>
                <div className={styles.impactStatIcon}><Users size={22} /></div>
                <div>
                  <dd>250+</dd>
                  <dt>{t('about.impact.activeMembers')}</dt>
                </div>
              </div>
              <div className={styles.impactStatItem}>
                <div className={styles.impactStatIcon}><TrendingUp size={22} /></div>
                <div>
                  <dd>Rs. 2.5M+</dd>
                  <dt>{t('about.impact.totalSavings')}</dt>
                </div>
              </div>
              <div className={styles.impactStatItem}>
                <div className={styles.impactStatIcon}><Globe size={22} /></div>
                <div>
                  <dd>40+</dd>
                  <dt>{t('about.impact.groups')}</dt>
                </div>
              </div>
              <div className={styles.impactStatItem}>
                <div className={styles.impactStatIcon}><Handshake size={22} /></div>
                <div>
                  <dd>100%</dd>
                  <dt>{t('about.impact.trust')}</dt>
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
              <em>{t('about.quote')}</em>
            </p>
            <span className={styles.quoteMarkRight}>&rdquo;</span>
            <cite className={styles.quoteAuthor}>– Helen Keller</cite>
          </motion.blockquote>
        </div>
      </section>

    </article>
  );
}

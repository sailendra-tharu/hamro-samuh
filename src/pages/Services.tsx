import { motion } from 'framer-motion';
import { Users, GraduationCap, HeartPulse, Briefcase, Megaphone, ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';
import { useLanguage } from '../context/LanguageContext';

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
    titleKey: 'services.community.title',
    descKey: 'services.community.desc',
    image: "/service-community.png"
  },
  {
    icon: <GraduationCap />,
    titleKey: 'services.education.title',
    descKey: 'services.education.desc',
    image: "/service-education.png"
  },
  {
    icon: <HeartPulse />,
    titleKey: 'services.health.title',
    descKey: 'services.health.desc',
    image: "/service-health.png"
  },
  {
    icon: <Briefcase />,
    titleKey: 'services.livelihood.title',
    descKey: 'services.livelihood.desc',
    image: "/service-livelihood.png"
  },
  {
    icon: <Megaphone />,
    titleKey: 'services.advocacy.title',
    descKey: 'services.advocacy.desc',
    image: "/service-advocacy.png"
  }
];

export default function Services() {
  const { language, t } = useLanguage();

  return (
    <article className={styles.services}>

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="services-title">
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
            <motion.h1 id="services-title" variants={fadeIn} className={styles.title}>
              {language === 'np' ? (
                <>
                  <span>{t('services.hero.title.rest')}</span>{' '}
                  <span className={styles.titleHighlight}>{t('services.hero.title.highlight')}</span>
                </>
              ) : (
                <>
                  <span className={styles.titleHighlight}>{t('services.hero.title.highlight')}</span>{' '}
                  <span>{t('services.hero.title.rest')}</span>
                </>
              )}
            </motion.h1>
            <motion.p variants={fadeIn} className={styles.description}>
              {t('services.hero.description')}
            </motion.p>
            <motion.div variants={fadeIn}>
              <a href="#core-services" className={styles.solidBtn}>
                {t('services.hero.button')} <ArrowRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Mission Card */}
        <motion.aside
          aria-labelledby="mission-title"
          className={styles.missionCard}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className={styles.missionIconBox}>
            <Users size={28} />
          </div>
          <h3 id="mission-title">{t('services.mission')}</h3>
          <div className={styles.missionDivider}></div>
          <p>{t('services.mission.description')}</p>
        </motion.aside>
      </section>

      {/* Core Services */}
      <section id="core-services" className={styles.coreSection} aria-labelledby="core-services-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.preTitleCenter}>
              {t('services.heading.preTitle')} <span className={styles.preTitleLine}>—</span>
            </span>
            <h2 id="core-services-title">{t('services.heading')}</h2>
          </div>

          <motion.ul
            className={styles.coreGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {services.map((srv, i) => (
              <li key={i}>
                <motion.article className={styles.coreCard} variants={fadeIn}>
                  <div className={styles.coreCardTop}>
                    <div className={styles.coreIconBox} aria-hidden="true">{srv.icon}</div>
                    <h3>{t(srv.titleKey)}</h3>
                    <p>{t(srv.descKey)}</p>
                  </div>
                  <div className={styles.coreCardImage}>
                    <img src={srv.image} alt={t(srv.titleKey)} />
                  </div>
                </motion.article>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.bottomCta} aria-label="Get involved with Hamro Samuh">
        <div className="container">
          <div className={styles.ctaBanner}>
            <div className={styles.ctaLeft}>
              <div className={styles.ctaItem}>
                <div className={styles.ctaIconBox}><Users size={24} /></div>
                <div>
                  <h4>{t('services.cta.firstTitle')}</h4>
                  <p>{t('services.cta.firstDescription')}</p>
                </div>
              </div>
              <div className={styles.ctaItem}>
                <div className={styles.ctaIconBox}><Heart size={24} /></div>
                <div>
                  <h4>{t('services.cta.secondTitle')}</h4>
                  <p>{t('services.cta.secondDescription')}</p>
                </div>
              </div>
            </div>
            <Link to="/contact" className={styles.ctaBtn}>
              {t('services.cta.button')} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </article>
  );
}

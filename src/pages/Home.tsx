import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { UserPlus, ArrowRight, Banknote, FileText as Document, Users as UsersIcon, BarChart3, ShieldCheck as Shield, Smartphone as Phone, CheckCircle2, Calendar, Star, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import alokImg from '../assets/alok.jpg';
import amitImg from '../assets/amit.jpg';
import jhalakImg from '../assets/jhalak.jpeg';
import sailendraImg from '../assets/sailendra.jpg';
import { useLanguage } from '../context/LanguageContext';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const testimonials = [
  {
    quoteKey: 'home.testimonial.sita',
    name: 'Sita Thapa',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=100&q=80'
  },
  {
    quoteKey: 'home.testimonial.ram',
    name: 'Ram Bahadur',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=100&q=80'
  },
  {
    quoteKey: 'home.testimonial.alok',
    name: 'Aalok Chaudhary',
    image: alokImg
  },
  {
    quoteKey: 'home.testimonial.amit',
    name: 'Amit Das Tharu',
    image: amitImg
  },
  {
    quoteKey: 'home.testimonial.jhalak',
    name: 'Jhalak Gurung',
    image: jhalakImg
  },
  {
    quoteKey: 'home.testimonial.sailendra',
    name: 'Sailendra Das Tharu',
    image: sailendraImg
  }
];

type AnimatedNumberProps = {
  value: number;
  prefix?: string;
  suffix?: string;
};

function AnimatedNumber({ value, prefix = '', suffix = '' }: AnimatedNumberProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(numberRef, { once: true, amount: 0.25 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frameId = 0;
    let growthId = 0;
    const delayId = window.setTimeout(() => {
      const startTime = performance.now();

      const updateValue = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / 1600, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(value * easedProgress));

        if (progress < 1) {
          frameId = window.requestAnimationFrame(updateValue);
        } else {
          growthId = window.setInterval(() => {
            setDisplayValue(current => current + 1);
          }, 1000);
        }
      };

      frameId = window.requestAnimationFrame(updateValue);
    }, 1000);

    return () => {
      window.clearTimeout(delayId);
      window.cancelAnimationFrame(frameId);
      window.clearInterval(growthId);
    };
  }, [isInView, value]);

  return (
    <span ref={numberRef}>
      {prefix}{displayValue.toLocaleString('en-IN')}{suffix}
    </span>
  );
}

export default function Home() {
  const { t } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveTestimonial(current => (current + 1) % testimonials.length);
    }, 3500);

    return () => window.clearInterval(rotation);
  }, []);

  return (
    <article className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="home-title">
        <motion.div
          className={styles.heroImageContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/hero-bg.png"
            alt="Community members looking out over the Kathmandu valley together"
            className={styles.heroImage}
          />
          <div className={styles.heroGradientMask}></div>
          <span className={styles.heroBadge}>
            Small Savings
            <br />
            Big Dreams
          </span>
        </motion.div>

        <div className={`container ${styles.heroContainer}`}>
          <motion.div
            className={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeIn} className={styles.heroPreTitle}>
              {t('home.hero.preTitle')}
            </motion.span>
            <motion.h1 id="home-title" variants={fadeIn} className={styles.title}>
              <span className={styles.titleHighlight}>{t('brand.name')}</span>
              <br />
              {t('home.hero.title')}
            </motion.h1>
            <motion.p variants={fadeIn} className={styles.description}>
              {t('home.hero.description')}
            </motion.p>
            <motion.div variants={fadeIn} className={styles.actions}>
              <Link to="/contact" className={styles.solidBtn}>
                <UserPlus size={18} /> {t('home.hero.join')} <ArrowRight size={18} />
              </Link>
              <button
                type="button"
                className={styles.solidBtn}
                onClick={() => {
                  window.location.href = "https://samuh.netlify.app/login";
                }}
              >
                 <User size={18} /> {t('home.hero.login')}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services} aria-labelledby="home-services-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 id="home-services-title">{t('home.services.heading')}</h2>
          </div>

          <ul className={styles.servicesGrid}>
            {[
              { icon: <Banknote />, titleKey: 'home.service.monthlySavings.title', descKey: 'home.service.monthlySavings.desc' },
              { icon: <Document />, titleKey: 'home.service.transparentRecords.title', descKey: 'home.service.transparentRecords.desc' },
              { icon: <UsersIcon />, titleKey: 'home.service.memberManagement.title', descKey: 'home.service.memberManagement.desc' },
              { icon: <BarChart3 />, titleKey: 'home.service.financialReports.title', descKey: 'home.service.financialReports.desc' },
              { icon: <Shield />, titleKey: 'home.service.secureData.title', descKey: 'home.service.secureData.desc' },
              { icon: <Phone />, titleKey: 'home.service.onlineAccess.title', descKey: 'home.service.onlineAccess.desc' }
            ].map((srv, i) => (
              <li key={i}>
                <motion.article
                  className={styles.serviceCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={styles.iconBox} aria-hidden="true">{srv.icon}</div>
                  <h3>{t(srv.titleKey)}</h3>
                  <p>{t(srv.descKey)}</p>
                </motion.article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats Banner */}
      <section className={styles.statsSection} aria-label="Hamro Samuh at a glance">
        <div className="container">
          <dl className={`${styles.statsBanner} ${styles.statsGrid}`}>
            <div className={styles.statItem}>
              <UsersIcon size={36} />
              <div>
                <dt>{t('home.stats.activeMembers')}</dt>
                <dd><AnimatedNumber value={512} suffix="+" /></dd>
              </div>
            </div>
            <div className={styles.statItem}>
              <Banknote size={36} />
              <div>
                <dt>{t('home.stats.totalSavings')}</dt>
                <dd><AnimatedNumber value={1568540} prefix="Rs. " /></dd>
              </div>
            </div>
            <div className={styles.statItem}>
              <Calendar size={36} />
              <div>
                <dt>{t('home.stats.monthlyCollections')}</dt>
                <dd><AnimatedNumber value={245300} prefix="Rs. " /></dd>
              </div>
            </div>
            <div className={styles.statItem}>
              <CheckCircle2 size={36} />
              <div>
                <dt>{t('home.stats.successfulTransactions')}</dt>
                <dd><AnimatedNumber value={1256} suffix="+" /></dd>
              </div>
            </div>
          </dl>
        </div>
      </section>

      {/* Info Sections */}
      <section className={styles.infoSection} aria-label="About Hamro Samuh">
        <div className={`container ${styles.infoGrid}`}>

          {/* About */}
          <article className={styles.infoCol}>
            <div className={styles.infoColHeader}>
              {/* <UsersIcon size={18} className={styles.infoIcon} /> */}
              <img src="/logo.png" alt="Hamro Samuh Logo" className={styles.logoIconImage} width={100} height={100} />
              <h3>{t('home.about.heading')}</h3>
            </div>
            <p className={styles.infoText}>
              {t('home.about.text')}
            </p>
            <Link to="/about" className={styles.learnMore}>{t('home.learnMore')}</Link>
          </article>

          {/* How It Works */}
          <section className={styles.infoCol} aria-labelledby="how-it-works-title">
            <div className={styles.infoColHeader}>
              <h3 id="how-it-works-title" className={styles.noIconH3}>{t('home.howItWorks')}</h3>
            </div>
            <ol className={styles.stepsList}>
              {[
                { num: 1, titleKey: 'home.step.register', descKey: 'home.step.register.desc' },
                { num: 2, titleKey: 'home.step.saveMoney', descKey: 'home.step.saveMoney.desc' },
                { num: 3, titleKey: 'home.step.trackSavings', descKey: 'home.step.trackSavings.desc' },
                { num: 4, titleKey: 'home.step.achieveGoals', descKey: 'home.step.achieveGoals.desc' }
              ].map(step => (
                <li key={step.num} className={styles.stepItem}>
                  <div className={styles.stepNum} aria-hidden="true">{step.num}</div>
                  <div>
                    <h4>{t(step.titleKey)}</h4>
                    <p>{t(step.descKey)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Testimonials */}
          <section className={styles.infoCol} aria-labelledby="testimonials-title">
            <div className={styles.infoColHeader}>
              <Star size={18} className={styles.infoIcon} />
              <h3 id="testimonials-title">{t('home.testimonials')}</h3>
            </div>
            <div
              className={styles.testimonialsList}
              aria-live="polite"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.article
                  key={testimonials[activeTestimonial].name}
                  className={styles.testimonialCard}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -32 }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                >
                  <p>"{t(testimonials[activeTestimonial].quoteKey)}"</p>
                  <div className={styles.testimonialAuthor}>
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                    />
                    <div>
                      <h4>{testimonials[activeTestimonial].name}</h4>
                      <span>{t('home.member')}</span>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </section>

          {/* Announcements */}
          <section className={styles.infoCol} aria-labelledby="announcements-title">
            <div className={styles.infoColHeader}>
              <Bell size={18} className={styles.infoIcon} />
              <h3 id="announcements-title">{t('home.announcements')}</h3>
            </div>
            <div className={styles.announcementsList}>
              <article className={styles.announcementCard}>
                <div className={styles.announcementIcon} aria-hidden="true"><Calendar size={18} /></div>
                <div>
                  <h4>{t('home.announcement.monthlyMeeting')}</h4>
                  <p>{t('home.announcement.monthlyMeeting.desc')}</p>
                  <time dateTime="2024-05-10">May 10, 2024</time>
                </div>
              </article>
              <article className={styles.announcementCard}>
                <div className={styles.announcementIcon} aria-hidden="true"><Star size={18} /></div>
                <div>
                  <h4>{t('home.announcement.newFeature')}</h4>
                  <p>{t('home.announcement.newFeature.desc')}</p>
                  <time dateTime="2024-05-05">May 05, 2024</time>
                </div>
              </article>
              <article className={styles.announcementCard}>
                <div className={styles.announcementIcon} aria-hidden="true"><Bell size={18} /></div>
                <div>
                  <h4>{t('home.announcement.holidayNotice')}</h4>
                  <p>{t('home.announcement.holidayNotice.desc')}</p>
                  <time dateTime="2024-05-02">May 02, 2024</time>
                </div>
              </article>
            </div>
          </section>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.bottomCta} aria-labelledby="home-cta-title">
        <div className="container">
          <div className={styles.ctaBanner}>
            <div className={styles.ctaText}>
              <div className={styles.ctaIconBox}><UsersIcon size={32} /></div>
              <div>
                <h2 id="home-cta-title">{t('home.cta.title')}</h2>
                <p>{t('home.cta.description')}</p>
              </div>
            </div>
            <Link to="/contact" className={styles.solidBtn}>
              <UserPlus size={18} /> {t('home.cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

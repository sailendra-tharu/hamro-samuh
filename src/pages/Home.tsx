import { motion } from 'framer-motion';
import { UserPlus, User, Banknote, FileText as Document, Users as UsersIcon, BarChart3, ShieldCheck as Shield, Smartphone as Phone, CheckCircle2, Calendar, Star, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

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

export default function Home() {
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
          <div className={styles.heroGradientMask}></div>
          <img
            src="/hero-bg.png"
            alt="Community working together"
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
            <motion.h1 id="home-title" variants={fadeIn} className={styles.title}>
              Welcome to <span className={styles.titleHighlight}>Hamro Samuh</span>
            </motion.h1>
            <motion.h2 variants={fadeIn} className={styles.subtitle}>
              Building a Stronger Future Together Through Savings
            </motion.h2>
            <motion.p variants={fadeIn} className={styles.description}>
              Welcome to Hamro Samuh, a trusted community savings organization where members come together to save regularly, access responsible financial support, and achieve their personal and collective financial goals. Through transparency, cooperation, and mutual trust, we are building stronger families, stronger communities, and a more prosperous future for everyone.
            </motion.p>
            <motion.div variants={fadeIn} className={styles.actions}>
              <Link to="/contact" className={styles.solidBtn}>
                <UserPlus size={18} /> Become a Member
              </Link>
              <button
                type="button"
                className={styles.solidBtn}
                onClick={() => {
                  window.location.href = "https://samuh.netlify.app/login";
                }}
              >
                <User size={18} /> Member Login
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services} aria-labelledby="home-services-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 id="home-services-title">Everything You Need to Manage Savings</h2>
          </div>

          <ul className={styles.servicesGrid}>
            {[
              { icon: <Banknote />, title: "Monthly Savings", desc: "Members can deposit their savings every month easily and securely." },
              { icon: <Document />, title: "Transparent Records", desc: "Every transaction is recorded and can be viewed anytime." },
              { icon: <UsersIcon />, title: "Member Management", desc: "Easy registration and management of all members." },
              { icon: <BarChart3 />, title: "Financial Reports", desc: "Generate reports for savings, balances and transactions." },
              { icon: <Shield />, title: "Secure Data", desc: "Member information and financial records are stored securely." },
              { icon: <Phone />, title: "Online Access", desc: "Access your account and transaction history anytime, anywhere." }
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
                  <h3>{srv.title}</h3>
                  <p>{srv.desc}</p>
                </motion.article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats Banner */}
      <section className={styles.statsBanner} aria-label="Hamro Samuh at a glance">
        <dl className={`container ${styles.statsGrid}`}>
          <div className={styles.statItem}>
            <UsersIcon size={36} />
            <div>
              <dt>Active Members</dt>
              <dd>512+</dd>
            </div>
          </div>
          <div className={styles.statItem}>
            <Banknote size={36} />
            <div>
              <dt>Total Savings</dt>
              <dd>Rs. 15,68,540</dd>
            </div>
          </div>
          <div className={styles.statItem}>
            <Calendar size={36} />
            <div>
              <dt>Monthly Collections</dt>
              <dd>Rs. 2,45,300</dd>
            </div>
          </div>
          <div className={styles.statItem}>
            <CheckCircle2 size={36} />
            <div>
              <dt>Successful Transactions</dt>
              <dd>1,256+</dd>
            </div>
          </div>
        </dl>
      </section>

      {/* Info Sections */}
      <section className={styles.infoSection} aria-label="About Hamro Samuh">
        <div className={`container ${styles.infoGrid}`}>

          {/* About */}
          <article className={styles.infoCol}>
            <div className={styles.infoColHeader}>
              {/* <UsersIcon size={18} className={styles.infoIcon} /> */}
              <img src="/logo.png" alt="Hamro Samuh Logo" className={styles.logoIconImage} width={100} height={100} />
              <h3>HAMRO SAMUH</h3>
            </div>
            <p className={styles.infoText}>
              Hamro Samuh is a community-based savings organization that encourages members to save money regularly in a secure and transparent manner. Our goal is to promote financial discipline, mutual support, and economic growth within our community.
            </p>
            <Link to="/about" className={styles.learnMore}>Learn More &rarr;</Link>
          </article>

          {/* How It Works */}
          <section className={styles.infoCol} aria-labelledby="how-it-works-title">
            <div className={styles.infoColHeader}>
              <h3 id="how-it-works-title" className={styles.noIconH3}>HOW IT WORKS</h3>
            </div>
            <ol className={styles.stepsList}>
              {[
                { num: 1, title: "Register", desc: "Become a member of Hamro Samuh." },
                { num: 2, title: "Save Money", desc: "Deposit your monthly savings." },
                { num: 3, title: "Track Your Savings", desc: "View your savings and transaction history online." },
                { num: 4, title: "Achieve Your Goals", desc: "Build financial security through consistent saving." }
              ].map(step => (
                <li key={step.num} className={styles.stepItem}>
                  <div className={styles.stepNum} aria-hidden="true">{step.num}</div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Testimonials */}
          <section className={styles.infoCol} aria-labelledby="testimonials-title">
            <div className={styles.infoColHeader}>
              <Star size={18} className={styles.infoIcon} />
              <h3 id="testimonials-title">TESTIMONIALS</h3>
            </div>
            <div className={styles.testimonialsList}>
              <article className={styles.testimonialCard}>
                <p>"Hamro Samuh has helped me develop the habit of saving every month."</p>
                <div className={styles.testimonialAuthor}>
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=100&q=80" alt="Sita Thapa" />
                  <div>
                    <h4>Sita Thapa</h4>
                    <span>Member</span>
                  </div>
                </div>
              </article>
              <article className={styles.testimonialCard}>
                <p>"The online system makes it easy to track my savings."</p>
                <div className={styles.testimonialAuthor}>
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=100&q=80" alt="Ram Bahadur" />
                  <div>
                    <h4>Ram Bahadur</h4>
                    <span>Member</span>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Announcements */}
          <section className={styles.infoCol} aria-labelledby="announcements-title">
            <div className={styles.infoColHeader}>
              <Bell size={18} className={styles.infoIcon} />
              <h3 id="announcements-title">ANNOUNCEMENTS</h3>
            </div>
            <div className={styles.announcementsList}>
              <article className={styles.announcementCard}>
                <div className={styles.announcementIcon} aria-hidden="true"><Calendar size={18} /></div>
                <div>
                  <h4>Monthly Meeting</h4>
                  <p>Monthly meeting will be held on 15th of every month.</p>
                  <time dateTime="2024-05-10">May 10, 2024</time>
                </div>
              </article>
              <article className={styles.announcementCard}>
                <div className={styles.announcementIcon} aria-hidden="true"><Star size={18} /></div>
                <div>
                  <h4>New Feature</h4>
                  <p>We have introduced online report generation.</p>
                  <time dateTime="2024-05-05">May 05, 2024</time>
                </div>
              </article>
              <article className={styles.announcementCard}>
                <div className={styles.announcementIcon} aria-hidden="true"><Bell size={18} /></div>
                <div>
                  <h4>Holiday Notice</h4>
                  <p>Office will remain closed on Buddha Purnima.</p>
                  <time dateTime="2024-05-02">May 02, 2024</time>
                </div>
              </article>
            </div>
          </section>

        </div>
      </section>

      {/* Bottom CTA */}
      <section aria-labelledby="home-cta-title">
        <div className="container">
          <div className={styles.ctaBanner}>
            <div className={styles.ctaText}>
              <div className={styles.ctaIconBox}><UsersIcon size={32} /></div>
              <div>
                <h2 id="home-cta-title">Ready to Start Your Savings Journey?</h2>
                <p>Join Hamro Samuh today and take the first step towards a secure financial future.</p>
              </div>
            </div>
            <Link to="/contact" className={styles.solidBtn}>
              <UserPlus size={18} /> Become a Member Today
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

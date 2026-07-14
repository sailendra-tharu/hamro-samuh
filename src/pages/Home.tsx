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
    <div className={styles.home}>
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
            <motion.h1 variants={fadeIn} className={styles.title}>
              Welcome to <br />
              <span className={styles.titleHighlight}>Hamro Samuh</span>
            </motion.h1>
            <motion.h2 variants={fadeIn} className={styles.subtitle}>
              Building a Stronger Future Together <br /> Through Savings
            </motion.h2>
            <motion.p variants={fadeIn} className={styles.description}>
              Join our community savings organization where members save <br />
              regularly, achieve financial goals, and support one another.
            </motion.p>
            <motion.div variants={fadeIn} className={styles.actions}>
              <button className={styles.solidBtn}>
                <UserPlus size={18} /> Become a Member
              </button>
              <button className={styles.outlineBtn}>
                <User size={18} /> Member Login
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.preTitle}>OUR SERVICES</span>
            <h2>Everything You Need to Manage Savings</h2>
          </div>

          <div className={styles.servicesGrid}>
            {[
              { icon: <Banknote />, title: "Monthly Savings", desc: "Members can deposit their savings every month easily and securely." },
              { icon: <Document />, title: "Transparent Records", desc: "Every transaction is recorded and can be viewed anytime." },
              { icon: <UsersIcon />, title: "Member Management", desc: "Easy registration and management of all members." },
              { icon: <BarChart3 />, title: "Financial Reports", desc: "Generate reports for savings, balances and transactions." },
              { icon: <Shield />, title: "Secure Data", desc: "Member information and financial records are stored securely." },
              { icon: <Phone />, title: "Online Access", desc: "Access your account and transaction history anytime, anywhere." }
            ].map((srv, i) => (
              <motion.div
                key={i}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.iconBox}>{srv.icon}</div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className={styles.statsBanner}>
        <div className={`container ${styles.statsGrid}`}>
          <div className={styles.statItem}>
            <UsersIcon size={36} />
            <div>
              <h4>512+</h4>
              <p>Active Members</p>
            </div>
          </div>
          <div className={styles.statItem}>
            <Banknote size={36} />
            <div>
              <h4>Rs. 15,68,540</h4>
              <p>Total Savings</p>
            </div>
          </div>
          <div className={styles.statItem}>
            <Calendar size={36} />
            <div>
              <h4>Rs. 2,45,300</h4>
              <p>Monthly Collections</p>
            </div>
          </div>
          <div className={styles.statItem}>
            <CheckCircle2 size={36} />
            <div>
              <h4>1,256+</h4>
              <p>Successful Transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className={styles.infoSection}>
        <div className={`container ${styles.infoGrid}`}>

          {/* About */}
          <div className={styles.infoCol}>
            <div className={styles.infoColHeader}>
              {/* <UsersIcon size={18} className={styles.infoIcon} /> */}
              <img src="/logo.png" alt="Hamro Samuh Logo" className={styles.logoIconImage} width={100} height={100} />
              <h3>HAMRO SAMUH</h3>
            </div>
            <p className={styles.infoText}>
              Hamro Samuh is a community-based savings organization that encourages members to save money regularly in a secure and transparent manner. Our goal is to promote financial discipline, mutual support, and economic growth within our community.
            </p>
            <Link to="/about" className={styles.learnMore}>Learn More &rarr;</Link>
          </div>

          {/* How It Works */}
          <div className={styles.infoCol}>
            <div className={styles.infoColHeader}>
              <h3 className={styles.noIconH3}>HOW IT WORKS</h3>
            </div>
            <div className={styles.stepsList}>
              {[
                { num: 1, title: "Register", desc: "Become a member of Hamro Samuh." },
                { num: 2, title: "Save Money", desc: "Deposit your monthly savings." },
                { num: 3, title: "Track Your Savings", desc: "View your savings and transaction history online." },
                { num: 4, title: "Achieve Your Goals", desc: "Build financial security through consistent saving." }
              ].map(step => (
                <div key={step.num} className={styles.stepItem}>
                  <div className={styles.stepNum}>{step.num}</div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className={styles.infoCol}>
            <div className={styles.infoColHeader}>
              <Star size={18} className={styles.infoIcon} />
              <h3>TESTIMONIALS</h3>
            </div>
            <div className={styles.testimonialsList}>
              <div className={styles.testimonialCard}>
                <p>"Hamro Samuh has helped me develop the habit of saving every month."</p>
                <div className={styles.testimonialAuthor}>
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=100&q=80" alt="Sita Thapa" />
                  <div>
                    <h5>Sita Thapa</h5>
                    <span>Member</span>
                  </div>
                </div>
              </div>
              <div className={styles.testimonialCard}>
                <p>"The online system makes it easy to track my savings."</p>
                <div className={styles.testimonialAuthor}>
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=100&q=80" alt="Ram Bahadur" />
                  <div>
                    <h5>Ram Bahadur</h5>
                    <span>Member</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Announcements */}
          <div className={styles.infoCol}>
            <div className={styles.infoColHeader}>
              <Bell size={18} className={styles.infoIcon} />
              <h3>ANNOUNCEMENTS</h3>
            </div>
            <div className={styles.announcementsList}>
              <div className={styles.announcementCard}>
                <div className={`${styles.announcementIcon} ${styles.pinkIcon}`}><Calendar size={18} /></div>
                <div>
                  <h4>Monthly Meeting</h4>
                  <p>Monthly meeting will be held on 15th of every month.</p>
                  <span>May 10, 2024</span>
                </div>
              </div>
              <div className={styles.announcementCard}>
                <div className={`${styles.announcementIcon} ${styles.yellowIcon}`}><Star size={18} /></div>
                <div>
                  <h4>New Feature</h4>
                  <p>We have introduced online report generation.</p>
                  <span>May 05, 2024</span>
                </div>
              </div>
              <div className={styles.announcementCard}>
                <div className={`${styles.announcementIcon} ${styles.blueIcon}`}><Bell size={18} /></div>
                <div>
                  <h4>Holiday Notice</h4>
                  <p>Office will remain closed on Buddha Purnima.</p>
                  <span>May 02, 2024</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.bottomCta}>
        <div className="container">
          <div className={styles.ctaBanner}>
            <div className={styles.ctaText}>
              <div className={styles.ctaIconBox}><UsersIcon size={32} /></div>
              <div>
                <h2>Ready to Start Your Savings Journey?</h2>
                <p>Join Hamro Samuh today and take the first step towards a secure financial future.</p>
              </div>
            </div>
            <button className={styles.solidBtn}>
              <UserPlus size={18} /> Become a Member Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

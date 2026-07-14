import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.header}
        >
          <h1>Get in <span className="text-gradient">Touch</span></h1>
          <p className={styles.subtitle}>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className={styles.formContainer}
        >
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="John Doe" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="john@example.com" />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="How can we help you?"></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={styles.submitBtn}
              type="button"
            >
              Send Message <Send size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

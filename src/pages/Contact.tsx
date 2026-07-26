import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
console.log("Service:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log("Template:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log("Public:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  return (
    <div className={styles.contact}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.header}
        >
          <h1>
            Get in <span className="text-gradient">Touch</span>
          </h1>

          <p className={styles.subtitle}>
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className={styles.formContainer}
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className={styles.form}
          >
            <div className={styles.inputGroup}>
              <label htmlFor="name">Full Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="How can we help you?"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={styles.submitBtn}
              type="submit"
            >
              <Send size={18} />
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
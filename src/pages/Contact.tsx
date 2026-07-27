import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { CheckCircle2, Send, XCircle } from "lucide-react";
import styles from "./Contact.module.css";

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    if (!toast) return;

    const timeout = window.setTimeout(() => setToast(null), 4000);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      console.error("EmailJS configuration is missing.");
      setToast({
        type: "error",
        message: "Message service is not configured. Please try again later.",
      });
      return;
    }

    try {
      await emailjs.sendForm(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        form.current,
        emailJsConfig.publicKey
      );

      setToast({ type: "success", message: "Message sent successfully!" });
      form.current.reset();
    } catch (error) {
      console.error(error);
      setToast({ type: "error", message: "Failed to send message." });
    }
  };

  return (
    <div className={styles.contact}>
      {toast && (
        <motion.div
          role="alert"
          aria-live="polite"
          className={`${styles.toast} ${toast.type === "success" ? styles.toastSuccess : styles.toastError}`}
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {toast.type === "success" ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
          <span>{toast.message}</span>
        </motion.div>
      )}

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

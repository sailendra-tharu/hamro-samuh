import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { CheckCircle2, Send, XCircle } from "lucide-react";
import styles from "./Contact.module.css";
import { useLanguage } from "../context/LanguageContext";

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

console.log("SERVICE:", emailJsConfig.serviceId);
console.log("TEMPLATE:", emailJsConfig.templateId);
console.log("PUBLIC:", emailJsConfig.publicKey);

export default function Contact() {
  const { t } = useLanguage();
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

  console.log("SERVICE:", emailJsConfig.serviceId);
  console.log("TEMPLATE:", emailJsConfig.templateId);
  console.log("PUBLIC:", emailJsConfig.publicKey);

  if (
    !emailJsConfig.serviceId ||
    !emailJsConfig.templateId ||
    !emailJsConfig.publicKey
  ) {
    console.error("EmailJS configuration is missing.");

    setToast({
      type: "error",
      message: t('contact.notConfigured'),
    });

    return;
  }

  try {
    const response = await emailjs.sendForm(
      emailJsConfig.serviceId,
      emailJsConfig.templateId,
      form.current,
      emailJsConfig.publicKey
    );

    console.log("Email sent successfully:", response);

    setToast({
      type: "success",
      message: t('contact.success'),
    });

    form.current.reset();
  } catch (error: any) {
    console.error("========== EMAILJS ERROR ==========");
    console.error(error);

    if (error?.status) {
      console.error("Status:", error.status);
    }

    if (error?.text) {
      console.error("Text:", error.text);
    }

    console.error("==================================");

    setToast({
      type: "error",
      message: error?.text || t('contact.failed'),
    });
  }
};

  return (
    <article className={styles.contact}>
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
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.header}
        >
          <h1 id="contact-title">
            {t('contact.title')} <span className="text-gradient">{t('contact.titleHighlight')}</span>
          </h1>

          <p className={styles.subtitle}>
            {t('contact.description')}
          </p>
        </motion.header>

        <motion.section
          aria-labelledby="contact-form-title"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className={styles.formContainer}
        >
          <h2 id="contact-form-title" className="sr-only">{t('contact.formTitle')}</h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={styles.form}
          >
            <div className={styles.inputGroup}>
              <label htmlFor="name">{t('contact.fullName')}</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder={t('contact.namePlaceholder')}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">{t('contact.email')}</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder={t('contact.emailPlaceholder')}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">{t('contact.message')}</label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder={t('contact.messagePlaceholder')}
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
              {t('contact.send')}
            </motion.button>
          </form>
        </motion.section>
      </div>
    </article>
  );
}

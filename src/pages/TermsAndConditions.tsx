import { motion } from 'framer-motion';
import styles from './Terms.module.css';
import { useLanguage } from '../context/LanguageContext';

export default function TermsAndConditions() {
  const { t } = useLanguage();

  return (
    <article className={styles.terms}>
      <div className="container">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.header}
        >
          <h1>{t('terms.title')} <span className={styles.highlight}>{t('terms.titleHighlight')}</span></h1>
          <p className={styles.subtitle}>{t('terms.subtitle')}</p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={styles.content}
        >

          {/* Section 1: Savings Rules */}
          <section className={styles.section}>
            <h2>{t('terms.savings.title')}</h2>
            <ol className={styles.orderedList}>
              {['terms.savings.1', 'terms.savings.2', 'terms.savings.3', 'terms.savings.4', 'terms.savings.5', 'terms.savings.6'].map(key => <li key={key}>{t(key)}</li>)}
            </ol>

            <div className={styles.subSection}>
              <h3>{t('terms.newMemberLoan.title')}</h3>
              <ul className={styles.bulletList}>
                <li>{t('terms.newMemberLoan.1')}</li>
                {/* <li>१ वर्षमा Loan चुक्ता गर्न सक्नुहुन्न भने जति Loan रकम रहेकोमा त्यतिको interest जति Renewal लाग्दैछ।</li> */}
              </ul>
              {/* <h3>ऋण लिएमा</h3>
              <ul className={styles.bulletList}>
                <li>पहिलो चोटी ऋण लिन रू. ५०००  मात्र पाइन्छ।</li>
              </ul> */}
            </div>
          </section>

          {/* Section 2: Saving, Loan & Fine */}
          <section className={styles.section}>
            <h2>{t('terms.loanFine.title')}</h2>
            <ul className={styles.bulletList}>
              <li>{t('terms.loanFine.1')}</li>
              <li>{t('terms.loanFine.2')}</li>
              <li>{t('terms.loanFine.3')}</li>
            </ul>
          </section>

          {/* Section 3: Meeting & Loan Rules */}
          <section className={styles.section}>
            <h2>{t('terms.meeting.title')}</h2>
            <ul className={styles.bulletList}>
              <li>{t('terms.meeting.1')}</li>
              {/* <li>हामी यो महिना देखि Emergency Loan को बेवास्ता नै गरिएको छौं, रू १०,००० अहिलेको लागि पूँजी बढे पछि अझै थापाला।</li> */}
              <li>{t('terms.meeting.2')}</li>
              <li>{t('terms.meeting.3')}</li>
              <li>{t('terms.meeting.4')}</li>
            </ul>
          </section>

          {/* Section 4: Interest Rates */}
          <section className={styles.section}>
            <h2>{t('terms.interest.title')}</h2>
            <ol className={styles.orderedList}>
              <li>{t('terms.interest.1')}</li>
              <li>{t('terms.interest.2')}</li>
            </ol>

            <div className={styles.exampleBox}>
              <h3>{t('terms.example.for')}</h3>
              <ul className={styles.bulletList}>
                <li>{t('terms.interest.example')}</li>
              </ul>
            </div>
          </section>

          {/* Section 5: New Member Loan */}
          <section className={styles.section}>
            <h2>{t('terms.newLoan.title')}</h2>
            <ol className={styles.orderedList}>
              <li>{t('terms.newLoan.1')}</li>
              {/* <li>३ महिना पछि रू १५,०००  सम्म ऋण लिन मिल्दछ।</li> */}
              <li>{t('terms.newLoan.2')}</li>
            </ol>
          </section>


          {/* Section 6: Profit & Secondary Saving */}
          <section className={styles.section}>
            <h2>{t('terms.profit.title')}</h2>
            <ol className={styles.orderedList}>
              <li>{t('terms.profit.1')}</li>
              <li>{t('terms.profit.2')}</li>
              <li>{t('terms.profit.3')}</li>
            </ol>
            <div className={styles.subSection}>
              <h3>{t('terms.secondaryFee.title')}</h3>
              <ul className={styles.bulletList}>
                <li>{t('terms.secondaryFee.1')}</li>
                <li>{t('terms.secondaryFee.2')}</li>
                <li>{t('terms.secondaryFee.3')}</li>
              </ul>
            </div>
          </section>

          {/* Section 7: Exit Policy */}
          {/* <section className={styles.section}>
            <h2>७. समूहबाट बाहिर निस्किने सम्बन्धमा</h2>
            <ul className={styles.bulletList}>
              <li>तीन वर्ष अगाडि निस्कियो भने <strong>Saving</strong> मात्र पाउनुहुन्छ।</li>
              {/* <li>तीन वर्ष पछि निस्कियो भने <strong>Saving</strong> + प्रत्येक वार्षिक <strong>Interest Add</strong> गरी पाउनुहुन्छ।</li> */}
            {/* </ul> */}
          {/* </section> */}

          {/* Section 8: Secondary New Member Loan */}
          <section className={styles.section}>
            <h2>{t('terms.secondaryNewLoan.title')}</h2>
            <ul className={styles.bulletList}>
              {/* <li>नयाँ member ६  महिनासम्म loan निस्काउन सक्नुहुन्न।</li> */}
              {/* <li>तीन महिनादेखि छ महिनासम्म loan secondary मा रु ७,००० सम्म मात्र निकाल्न मिल्दछ।</li> */}
              <li>{t('terms.secondaryNewLoan.1')}</li>
            </ul>
          </section>

          {/* Section 9: Secondary Loan & Interest */}
          <section className={styles.section}>
            <h2>{t('terms.secondaryInterest.title')}</h2>
            <ul className={styles.bulletList}>
              <li>{t('terms.secondaryInterest.1')}</li>
              <li>{t('terms.secondaryInterest.2')}</li>
            </ul>
            <div className={styles.exampleBox}>
              <h3>{t('terms.example.for')}</h3>
              <ul className={styles.bulletList}>
                <li>{t('terms.secondaryInterest.example.1')}</li>
                <li>{t('terms.secondaryInterest.example.2')}</li>
              </ul>
            </div>
          </section>

          {/* Section 10: Share Market */}
          <section className={styles.section}>
            <h2>{t('terms.share.title')}</h2>
            <ul className={styles.bulletList}>
              <li>{t('terms.share.1')}</li>
              <li>{t('terms.share.2')}</li>
              <li>{t('terms.share.3')}</li>
            </ul>
          </section>

          {/* Footer Note */}
          <footer className={styles.footerNote}>
            <p>{t('terms.date')}</p>
            <p><strong>{t('terms.thankYou')}</strong></p>
          </footer>

        </motion.div>
      </div>
    </article>
  );
}

import { motion } from 'framer-motion';
import styles from './Terms.module.css';

export default function TermsAndConditions() {
  return (
    <article className={styles.terms}>
      <div className="container">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.header}
        >
          <h1>नियम तथा <span className={styles.highlight}>सर्तहरू</span></h1>
          <p className={styles.subtitle}>हाम्रो समूहमा सहभागी हुनु अघि यी नियमहरू ध्यानपूर्वक पढ्नुहोस्।</p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={styles.content}
        >

          {/* Section 1: Savings Rules */}
          <section className={styles.section}>
            <h2>१. बचत सम्बन्धी नियमहरू</h2>
            <ol className={styles.orderedList}>
              <li>१ गते देखि १० गते सम्म बचत गर्यो भने शुल्क लाग्दैन।</li>
              <li>१० गते माथि बचत गर्यो भने रु. १०० शुल्क लाग्छ।</li>
              <li>१ महिना को रू. १०० शुल्क</li>
              <li>२ महिना को रू. २५० शुल्क</li>
              <li>३ महिना को रू. ५०० शुल्क</li>
              <li>लगातार ५ महिनासम्म पैसा नतिरेमा सदस्यको खाता बन्द हुनेछ। उहाँले बचत गरेको रकम समूह सकिएपछि बिना ब्याज फिर्ता गरिनेछ</li>
            </ol>

            <div className={styles.subSection}>
              <h3>ऋण चाहेको मा (नयाँ सदस्यका लागि)</h3>
              <ul className={styles.bulletList}>
                <li>६ महिना पछि</li>
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
            <h2>२. समूहको Saving, Loan & Fine सम्बन्धमा</h2>
            <ul className={styles.bulletList}>
              <li>यदि कुनै सदस्यले ऋणको किस्ता वा मासिक बचत रकम लगातार २ महिनासम्म नतिरेमा, अर्को पटकदेखि उहाँलाई समूहबाट अधिकतम रु. १५,००० सम्म मात्र ऋण प्रदान गरिनेछ। यसभन्दा बढी रकमको ऋण उपलब्ध गराइने छैन।
              </li>
              <li>यदि कुनै सदस्यले जरिवाना (Fine) समयमै नतिरेमा, उक्त जरिवाना रकम पहिले उहाँको वार्षिक ब्याजबाट कट्टा गरिनेछ। यदि वार्षिक ब्याजले जरिवाना रकम नपुगेमा, बाँकी जरिवाना रकम उहाँको मूल बचत रकमबाट कट्टा गरिनेछ।
                ।</li>
              <li>यदि कसैलाई समस्या छ, भने एक चोटि समूहको Group मा Information गरिदिनु होला, हामी हेरेर केही Decision लिन्छौं।</li>
            </ul>
          </section>

          {/* Section 3: Meeting & Loan Rules */}
          <section className={styles.section}>
            <h2>३. Meeting तथा Loan सम्बन्धी नियमहरू</h2>
            <ul className={styles.bulletList}>
              <li>हामी हरेर महिनामा एक चोटि Meeting मा बस्छौं, पैसा Deposit भए पछि शनिबारको दिन।</li>
              {/* <li>हामी यो महिना देखि Emergency Loan को बेवास्ता नै गरिएको छौं, रू १०,००० अहिलेको लागि पूँजी बढे पछि अझै थापाला।</li> */}
              <li>यदि कसैलाई Loan चाहिएमा ७ वा १० दिन अगाडि समूहमा Information गारिदिनु होला।</li>
              <li>हामी प्रत्येक महिना रू ५० छुटयाएको छौं, समूहको Member लाई Notice गराउनको लागि।</li>
              <li>Loan लिनु अगाडि Service Charge Deposit (१५०) गरिदिनु होला।</li>
            </ul>
          </section>

          {/* Section 4: Interest Rates */}
          <section className={styles.section}>
            <h2>४. ब्याज दर (Interest Rate)</h2>
            <ol className={styles.orderedList}>
              <li>रू. ०  देखि रू. ५०,०००  सम्मको ऋण बार्षिक ब्याज <strong>९%</strong> लाग्दछ।</li>
              <li>रू. ५०,०००  देखि माथिको ऋणको ब्याज <strong>१२%</strong> लाग्दछ।</li>
            </ol>

            <div className={styles.exampleBox}>
              <h3>उदाहरणको लागि</h3>
              <ul className={styles.bulletList}>
                <li>रू ७,००,००० ऋण लिएको भने — रू ५,०,०००  को बार्षिक ९% + रू २,०,०००  को १२% लाग्दछ।</li>
              </ul>
            </div>
          </section>

          {/* Section 5: New Member Loan */}
          <section className={styles.section}>
            <h2>५. नयाँ सदस्य र ऋण सुविधा</h2>
            <ol className={styles.orderedList}>
              <li>हाम्रो समूहमा जोडेको नयाँ सदस्य ६ महिना सम्म ऋण निकाल्न मिल्दैन।</li>
              {/* <li>३ महिना पछि रू १५,०००  सम्म ऋण लिन मिल्दछ।</li> */}
              <li>यदि कुनै सदस्यले लगातार ६ महिनासम्म नियमित रूपमा बचत (Saving) गरेमा र आफ्नो बचत राम्रोसँग कायम राखेमा, उहाँले आवश्यकताअनुसार ऋण प्राप्त गर्न सक्नुहुनेछ।
              </li>
            </ol>
          </section>


          {/* Section 6: Profit & Secondary Saving */}
          <section className={styles.section}>
            <h2>६. नाफा वितरण तथा Secondary Saving</h2>
            <ol className={styles.orderedList}>
              <li>हाम्रो समूहको नाममा बार्षिक Total Profit बाट ५% Saving गर्ने निर्णय गरेको छ।</li>
              <li><strong>जसले हिसाब किताब गरिराखेको छ भने</strong> बार्षिक Total Profit बाट २% हुने गरी दिने निर्णय गरेको छ।</li>
              <li><strong>Secondary Saving</strong> मा नयाँ व्यक्ति join २०८२/१०/०१ गते देखि २०८३/०९/३० गते सम्म कुनै शुल्क लाग्दैन यदि त्योभन्दा बढी भएमा रु ५० को दरले शुल्क लाग्ने निर्णय गरिएको।</li>
            </ol>
            <div className={styles.subSection}>
              <h3>Secondary Saving शुल्क सम्बन्धमा</h3>
              <ul className={styles.bulletList}>
                <li>पहिलो महिनामा saving छुटे वा नभरेमा रु २० शुल्क लाग्दैछ।</li>
                <li>दोस्रो महिनामा रु ५० को शुल्क लाग्दछ।</li>
                <li>तेस्रो महिनामा रु १०० को शुल्क लाग्दछ।</li>
              </ul>
            </div>
          </section>

          {/* Section 7: Exit Policy */}
          <section className={styles.section}>
            <h2>७. समूहबाट बाहिर निस्किने सम्बन्धमा</h2>
            <ul className={styles.bulletList}>
              <li>तीन वर्ष अगाडि निस्कियो भने <strong>Saving</strong> मात्र पाउनुहुन्छ।</li>
              {/* <li>तीन वर्ष पछि निस्कियो भने <strong>Saving</strong> + प्रत्येक वार्षिक <strong>Interest Add</strong> गरी पाउनुहुन्छ।</li> */}
            </ul>
          </section>

          {/* Section 8: Secondary New Member Loan */}
          <section className={styles.section}>
            <h2>८. Secondary नयाँ Member को Loan</h2>
            <ul className={styles.bulletList}>
              {/* <li>नयाँ member ६  महिनासम्म loan निस्काउन सक्नुहुन्न।</li> */}
              {/* <li>तीन महिनादेखि छ महिनासम्म loan secondary मा रु ७,००० सम्म मात्र निकाल्न मिल्दछ।</li> */}
              <li>सदस्य बनेको ६ महिना पूरा भएपछि Secondary Loan अन्तर्गत अधिकतम रु. ७,००० सम्म ऋण लिन पाइनेछ।
              </li>
            </ul>
          </section>

          {/* Section 9: Secondary Loan & Interest */}
          <section className={styles.section}>
            <h2>९. Secondary को Loan र Interest सम्बन्ध</h2>
            <ul className={styles.bulletList}>
              <li>रु १,००० देखि रु १०,०००  सम्मको interest वार्षिक <strong>९%</strong> लागिनेछ।</li>
              <li>रु १० हजार देखि माथिको interest <strong>१२%</strong> लागिनेछ।</li>
            </ul>
            <div className={styles.exampleBox}>
              <h3>उदाहरण</h3>
              <ul className={styles.bulletList}>
                <li>रु २०,०००  को Loan — रु १० हजारको वार्षिक ९% + बाँकी १० हजारको १२% लाग्दैछ।</li>
                <li>१ वर्षमा Loan चुक्ता गर्न सक्नुहुन्न भने जति Loan रकम रहेकोमा त्यतिको interest जति <strong>Renewal</strong> लाग्दैछ।</li>
              </ul>
            </div>
          </section>

          {/* Section 10: Share Market */}
          <section className={styles.section}>
            <h2>१०. सेयर बजार सम्बन्धको</h2>
            <ul className={styles.bulletList}>
              <li>जसजसको हाम्रो समूहको लागि Demat दिनुभएको छ भने पर्यो भने हाम्रो समूहको सेयर बिक्री भयो भने उसलाई <strong>१०% profit</strong> बाट दिने निर्णय गरेको छ।</li>
              <li>जसजसको नाममा Demat हाम्रो समूहले खोलिदिएको छ उसले आफैं भनेर खोल्दैछ भने उसले पर्यो भने हाम्रो समूहको Saving मा <strong>१०% profit</strong> दिनुपर्ने निर्णय गरेको छ।</li>
              <li>सेयरको लागि पैसा पठाएको त्यो पैसा आफ्नो <strong>Personal</strong> खर्च नगरिदिनुहोला यही अनुरोध छ।</li>
            </ul>
          </section>

          {/* Footer Note */}
          <footer className={styles.footerNote}>
            <p>२०८२/०९/२०</p>
            <p><strong>धन्यवाद</strong></p>
          </footer>

        </motion.div>
      </div>
    </article>
  );
}

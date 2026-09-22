import { motion } from 'framer-motion';
import styles from './Members.module.css';

import alokImg from '../assets/alok.jpg';
import amitImg from '../assets/amit.jpg';
import arbindImg from '../assets/arbind.png';
import aryanImg from '../assets/aryan.jpeg';
import gaurishankarImg from '../assets/gaurishankar.jpg';
import kishorImg from '../assets/kishor.png';
import ramjitImg from '../assets/ramjit.jpg';
import sailendraImg from '../assets/sailendra.jpg';
import rameshImg from '../assets/ramesh.jpeg';
import abinashImg from '../assets/abinash.jpeg';
import harindarImg from '../assets/harindar.jpeg';
import jhalakImg from '../assets/jhalak.jpeg';
import samirImg from '../assets/samir.jpeg';
import sanjayImg from '../assets/sanjay.png';
import shreekantiImg from '../assets/shreekanti.jpeg';
import bineshImage from '../assets/binesh.jpg';
import binayImage from '../assets/binay.jpg';
import surajImage from '../assets/suraj.jpg';
import rajImage from '../assets/raj.png';
import yubrajImage from '../assets/yubraj.png';
import zebinImage from '../assets/zebin.png';
import akashImage from '../assets/akash.png';
import { useLanguage } from '../context/LanguageContext';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const members = [
  { name: "Aalok Chaudhary", nameNp: "आलोक चौधरी", role: "Member", image: alokImg, joined: "2082" },
  { name: "Amit Das Tharu", nameNp: "अमित दास थारु", role: "Member", image: amitImg, joined: "2080" },
  { name: "Arbind Prasad Adhikari", nameNp: "अरविन्द प्रसाद अधिकारी", role: "Member", image: arbindImg, joined: "2080" },
  { name: "Aryan Chaudhary", nameNp: "आर्यन चौधरी", role: "Member", image: aryanImg, joined: "2082" },
  { name: "Gaurishankar Das Tharu", nameNp: "गौरीशंकर दास थारु", role: "Member", image: gaurishankarImg, joined: "2080" },
  { name: "Kishor Tharu", nameNp: "किशोर थारु", role: "Member", image: kishorImg, joined: "2082" },
  { name: "Ramjit Patawari", nameNp: "रामजीत पटवारी", role: "Member", image: ramjitImg, joined: "2082" },
  { name: "Sailendra Das Tharu", nameNp: "शैलेन्द्र दास थारु", role: "Member", image: sailendraImg, joined: "2080" },
  { name: "Ramesh Mahato Tharu", nameNp: "रमेश महतो थारु", role: "Member", image: rameshImg, joined: "2080" },
  { name: "Abinash Kumar", nameNp: "अबिनाश कुमार", role: "Member", image: abinashImg, joined: "2082" },
  { name: "Harindar Chaudhary", nameNp: "हरिन्दर चौधरी", role: "Member", image: harindarImg, joined: "2082" },
  { name: "Jhalak Gurung", nameNp: "झलक गुरुङ", role: "Member", image: jhalakImg, joined: "2082" },
  { name: "Samir Guro", nameNp: "समीर गुरो", role: "Member", image: samirImg, joined: "2083" },
  { name: "Sanjay Chaudhary", nameNp: "सञ्जय चौधरी", role: "Member", image: sanjayImg, joined: "2083" },
  { name: "Shreekanti Devi", nameNp: "श्रीकान्ती देवी", role: "Member", image: shreekantiImg, joined: "2080" },
  { name: "Binesh Das", nameNp: "बिनेश दास", role: "Member", image: bineshImage, joined: "2083" },
  { name: "Binay Chaudhary", nameNp: "विनय चौधरी", role: "Member", image: binayImage, joined: "2083" },
  { name: "Suraj Khawas", nameNp: "सुरज खवास", role: "Member", image: surajImage, joined: "2083" },
  { name: "Raj Panjiyar", nameNp: "राज पञ्जियार", role: "Member", image: rajImage, joined: "2083" },
  { name: "Yubraj Gurung", nameNp: "युवराज गुरुङ", role: "Member", image: yubrajImage, joined: "2083" },
  { name: "Zebin Gurung", nameNp: "जेबिन गुरुङ", role: "Member", image: zebinImage, joined: "2083" },
  { name: "Akash Chaudhary", nameNp: "आकाश चौधरी", role: "Member", image: akashImage, joined: "2083" },
  

];

export default function Members() {
  const { language, t } = useLanguage();

  return (
    <article className={styles.members}>
      <section className={styles.membersSection} aria-labelledby="members-title">
        <div className="container">
          <div className={styles.header}>
            <h1 id="members-title" className={styles.title}>{t('members.heading')}</h1>
          </div>
          <motion.ul
            className={styles.grid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {members.map((member, index) => (
              <li key={index}>
              <motion.article
                variants={fadeIn}
                className={styles.card}
                whileHover={{ y: -6 }}
              >
                <div className={styles.cardImageWrap}>
                  <img
                    src={member.image}
                    alt={language === 'np' ? member.nameNp : member.name}
                    className={styles.image}
                    loading="lazy"
                  />
                  <div className={styles.cardImageOverlay}></div>
                </div>
                <div className={styles.cardBody}>
                  <h3>{language === 'np' ? member.nameNp : member.name}</h3>
                  <span className={styles.role}>{t('members.role')}</span>
                  <p className={styles.joined}>{t('members.since')} {member.joined}</p>
                </div>
              </motion.article>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>
    </article>
  );
}

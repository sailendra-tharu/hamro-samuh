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

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const members = [
  { name: "Aalok Kumar Tharu", role: "Member", image: alokImg, joined: "2020" },
  { name: "Amit Das Tharu", role: "Member", image: amitImg, joined: "2020" },
  { name: "Arbind Adhikari", role: "Member", image: arbindImg, joined: "2021" },
  { name: "Aryan Kumar Tharu", role: "Member", image: aryanImg, joined: "2021" },
  { name: "Gaurishankar Das Tharu", role: "Member", image: gaurishankarImg, joined: "2021" },
  { name: "Kishor kumar Tharu", role: "Member", image: kishorImg, joined: "2022" },
  { name: "Ramjit Mahato", role: "Member", image: ramjitImg, joined: "2022" },
  { name: "Sailendra Das Tharu", role: "Member", image: sailendraImg, joined: "2022" },
  { name: "Ramesh Chaudhary", role: "Member", image: rameshImg, joined: "2022" },
  { name: "Abinash Kumar", role: "Member", image: abinashImg, joined: "2022" },
  { name: "Harindar Tharu", role: "Member", image: harindarImg, joined: "2023" },
  { name: "Jhalak Gurung", role: "Member", image: jhalakImg, joined: "2023" },
  { name: "Samir Guro", role: "Member", image: samirImg, joined: "2023" },
  { name: "Sanjay Chaudhary", role: "Member", image: sanjayImg, joined: "2023" },
];

export default function Members() {
  return (
    <div className={styles.members}>
      <section className={styles.membersSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h1 className={styles.title}>Our Members</h1>
          </div>
          <motion.div
            className={styles.grid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {members.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className={styles.card}
                whileHover={{ y: -6 }}
              >
                <div className={styles.cardImageWrap}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={styles.image}
                    loading="lazy"
                  />
                  <div className={styles.cardImageOverlay}></div>
                </div>
                <div className={styles.cardBody}>
                  <h3>{member.name}</h3>
                  <span className={styles.role}>{member.role}</span>
                  <p className={styles.joined}>Member since {member.joined}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
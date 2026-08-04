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

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const members = [
  { name: "Aalok Chaudhary", role: "Member", image: alokImg, joined: "2082" },
  { name: "Amit Das Tharu", role: "Member", image: amitImg, joined: "2080" },
  { name: "Arbind Prasad Adhikari", role: "Member", image: arbindImg, joined: "2080" },
  { name: "Aryan Chaudhary", role: "Member", image: aryanImg, joined: "2082" },
  { name: "Gaurishankar Das Tharu", role: "Member", image: gaurishankarImg, joined: "2080" },
  { name: "Kishor Tharu", role: "Member", image: kishorImg, joined: "2082" },
  { name: "Ramjit Patawari", role: "Member", image: ramjitImg, joined: "2082" },
  { name: "Sailendra Das Tharu", role: "Member", image: sailendraImg, joined: "2080" },
  { name: "Ramesh Mahato Tharu", role: "Member", image: rameshImg, joined: "2080" },
  { name: "Abinash Kumar", role: "Member", image: abinashImg, joined: "2082" },
  { name: "Harindar Chaudhary", role: "Member", image: harindarImg, joined: "2082" },
  { name: "Jhalak Gurung", role: "Member", image: jhalakImg, joined: "2082" },
  { name: "Samir Guro", role: "Member", image: samirImg, joined: "2083" },
  { name: "Sanjay Chaudhary", role: "Member", image: sanjayImg, joined: "2083" },
  { name: "Shreekanti Devi", role: "Member", image: shreekantiImg, joined: "2080" },
  { name: "Binesh Das", role: "Member", image: bineshImage, joined: "2083" },
  { name: "Binay chaudhary", role: "Member", image: binayImage, joined: "2083" },
  { name: "Suraj khawas", role: "Member", image: surajImage, joined: "2083" },
  

];

export default function Members() {
  return (
    <article className={styles.members}>
      <section className={styles.membersSection} aria-labelledby="members-title">
        <div className="container">
          <div className={styles.header}>
            <h1 id="members-title" className={styles.title}>Our Members</h1>
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
              </motion.article>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>
    </article>
  );
}

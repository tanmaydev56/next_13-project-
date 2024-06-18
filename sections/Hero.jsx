'use client';

import { motion } from 'framer-motion';
import styles from '../styles';

import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1.2)}
        // this 1.2 is the delay open the textvariant funciton to know more it is just animation delay
          className={`${styles.heroHeading}`}
        >METAVERSE
        </motion.h1>
        <motion.div
          variants={textVariant(1.3)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>MA</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>NESS</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px]-mt-[12px]"
      >
        <div className="rounded-tl-[140px] absolute w-full h-[300px] z-[0] -top-[50px]  hero-gradient" />
        <img src="/cover.png" alt="cover" className="w-full sm:h-[500px] h-[350px] -top-[20px]  object-cover rounded-tl-[140px]  z-10 relative" />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px]  pr=[40px] relative z-10">

            <img src="/stamp.png" alt="stamp" className=" absolute sm:w-[155px] w-[100px] sm:h-[155px] -top-[20px] h-[100px] object-contain" />

          </div>
        </a>

      </motion.div>

    </motion.div>
  </section>
);

export default Hero;
// motion.div have some properties
// staggeer wale me show me 2 prop hai transtion me staggerchild and delay child so
// this makes out motion div a container div inside of which we can render children animations
// in this we r using framer motion animation (google) seee viewport
// sre joh bhi gradient div hai mtlb joh bus site me color ya gradient dall rhe hai woh sabh self closing hongr

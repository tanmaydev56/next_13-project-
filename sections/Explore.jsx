"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TypingText, ExploreCard, TitleText } from "../components";
import { exploreWorlds } from "../constants";

const Explore = () => {
  const [active, setactive] = useState('world-2');
  return (
    <section className={`${styles.paddings} `} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want
              <br className="md:block hidden" /> to explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((worlds, index) => (
            <ExploreCard
              key={worlds.id}
              {...worlds}
              //...worlds ka yeh malab hai ki explorecard worlds ki bhi sari prop
              // accept kaega  go to ExploreWorlds uski sari prop explroecard accept karega
              index={index}
              active={active}
              handleclick={setactive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;

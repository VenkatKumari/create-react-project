import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
//Framer motion
import { motion } from "framer-motion";

const AboutSection = () => {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 3 } },
  };
  const container = {
    hidden: { x: 100 },
    show: { x: 0, transition: { duration: 2, ease: "easeOut" } },
  };
  return (
    <About>
      <Description>
        <motion.div
          className="title"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Hide>
            <motion.h2 variants={titleAnim} initial="hidden" animate="show">
              We work to make
            </motion.h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2> true.</h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          ahve professionals with amazing skills.{" "}
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="A guy with the camera" />
      </Image>
    </About>
  );
};

export default AboutSection;

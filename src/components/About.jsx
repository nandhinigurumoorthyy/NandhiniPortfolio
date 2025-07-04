import React from "react";
import { ABOUT_CONTENT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <div>
      <section className="px-6 py-10" id="about">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
          About
        </h1>
        <div className="h-1 w-20 mb-8 bg-white"></div>
        <div className="max-w-4xl mx-auto">
          {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-xl md:text-2xl lg:text-2xl mb-10 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={textVariant}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

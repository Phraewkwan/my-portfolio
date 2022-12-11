import React, { useState, useEffect } from "react";
import "./Skills.scss";

import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
// import { urlFor, client } from "../../client";

import allSkills from "./allSkill";

const Skills = () => {
  const [skills, setSkills] = useState(allSkills);

  // const [skills, setSkills] = useState([]);
  // useEffect(() => {
  //   const skillsQuery = '*[_type == "skills"]';

  //   client.fetch(skillsQuery).then((data) => {
  //     setSkills(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-frontend-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, "skills");

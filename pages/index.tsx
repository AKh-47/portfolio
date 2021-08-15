import React, { ReactElement, Fragment } from 'react';

import Home from '../sections/Home';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import About from '../sections/About';
import Contact from '../sections/Contact';

import data from '../utils/data';

export default function Index({
  projects,
  skills,
  about,
  resume,
}): ReactElement {
  return (
    <Fragment>
      <nav className="navbar">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        {/* <a href="#about">About</a> */}
        <a href="#contact">Contact</a>
      </nav>
      <Home resume={resume} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      {/* <About about={about} /> */}
      <Contact />
    </Fragment>
  );
}

export const getStaticProps = () => {
  // const data = require("../utils/data");
  const { projects, skills, about, resume } = data;

  return {
    props: { projects, skills, about, resume },
  };
};

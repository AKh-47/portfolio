import React, { ReactElement } from "react";

// https://css-tricks.com/animate-a-container-on-mouse-over-using-perspective-and-transform/

interface Props {
  skills: {
    frontEnd: string[];
    backEnd: string[];
    misc: string[];
  };
}

export default function Skills({ skills }: Props): ReactElement {
  return (
    <div id="skills" className="skills">
      <h1>Skills</h1>
      <main>
        <section>
          <h2>Front End</h2>
          {skills.frontEnd.map((skill) => (
            <Skill name={skill} />
          ))}
        </section>
        <section>
          <h2>Back End</h2>
          {skills.backEnd.map((skill) => (
            <Skill name={skill} />
          ))}
        </section>
        <section>
          <h2>Miscellaneous</h2>
          {skills.misc.map((skill) => (
            <Skill name={skill} />
          ))}
        </section>
      </main>
    </div>
  );
}

function Skill({ name }: { name: string }): ReactElement {
  return (
    <div className="skill">
      <img
        style={{
          background: name.toLowerCase() === "next.js" ? "white" : null,
          borderRadius: name.toLowerCase() === "next.js" ? "50%" : null,
        }}
        src={`/skills/${name.toLowerCase()}.png`}
        alt={name}
      />
      <span>{name}</span>
    </div>
  );
}

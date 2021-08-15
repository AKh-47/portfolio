import React, { ReactElement, Fragment } from 'react';

interface Props {
  projects: IProject[];
}

interface IProject {
  name: string;
  description: string;
  stack: string[];
  image: string;
  repo: string;
  site: string;
  ongoing: boolean;
}

interface IProjectProps extends IProject {
  alt: boolean;
}

export default function Projects({ projects }: Props): ReactElement {
  console.log(projects);

  return (
    <Fragment>
      <div id="projects" className="projects">
        <h1>Projects</h1>
        {projects.map((project, i) => (
          <Project key={i} alt={i % 2 != 0} {...project} />
        ))}
      </div>
      <div className="projects-more"></div>
    </Fragment>
  );
}

function Project({
  name,
  description,
  stack,
  image,
  repo,
  site,
  ongoing,
}: IProjectProps): ReactElement {
  return (
    <div className="project">
      <img className="image" src="/projects/typeracer.png" />
      <div className="content">
        <h2>
          {name}
          {ongoing && <span>Ongoing</span>}
        </h2>
        <div className="stack">
          {stack.map((tech) => (
            <img
              key={tech}
              src={`/skills/${tech.toLowerCase()}.png`}
              alt={tech}
            />
          ))}
        </div>
        <p>{description}</p>
      </div>
      <div className="links">
        {repo && (
          <a href={repo} target="_blank">
            <i className="fas fa-code"></i>
          </a>
        )}
        {site && (
          <a href={site} target="_blank">
            <i className="fas fa-eye"></i>
          </a>
        )}
      </div>
    </div>
  );
}

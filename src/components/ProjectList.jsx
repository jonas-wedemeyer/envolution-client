import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.projectId}>
            <ProjectCard
              name={project.name}
              id={project.projectId}
              date={project.date}
              organizationName={project.organizationName}
              shortTerm={project.shortTerm}
              category={project.category}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
  const renderProjects = projects.map((project) => (
    <li key={project.id}>
      <ProjectCard
        name={project.name}
        id={project.id}
        date={project.date}
        organizationName={project.organizationName}
        availability={project.availability}
        category={project.category}
        picture={project.picture}
      />
    </li>
  ));

  return (
    <div>
      <ul>{renderProjects}</ul>
    </div>
  );
};

export default ProjectList;

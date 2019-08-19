import React from 'react';
import ProjectCard from './ProjectCard';

const UserProjectList = ({ projects }) => {
  return (
    <div>
      <div>
        <p>My Projects</p>
      </div>
      <ul>
        {projects.map((project) => (
          <li key={project.projectId}>
            <ProjectCard
              name={project.name}
              id={project.projectId}
              date={project.date}
              organizationName={project.organizationName}
              category={project.category}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProjectList;

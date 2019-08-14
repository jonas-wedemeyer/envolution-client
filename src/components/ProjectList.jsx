import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div>
      <p>Here is the list:</p>
      <ul>
        {projects.map((project) => (
          <li key={project.projectId}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

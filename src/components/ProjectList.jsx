import React from 'react';

const ProjectList = ({ allProjects }) => {
  return (
    <div>
      <p>Here is the list:</p>
      <ul>
        {allProjects.map((project) => (
          <li key={project.projectId}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

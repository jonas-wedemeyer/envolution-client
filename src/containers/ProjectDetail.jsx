import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getOneProject } from '../redux/reducers/projects/actions';
import { getProject } from '../redux/reducers/projects/selector';
import { ProjectById } from '../components';

export default function ProjectDetail(props) {
  const selectedProject = useSelector(getProject);
  const dispatch = useDispatch();
  console.log('selected proj', selectedProject); // eslint-disable-line

  useEffect(() => {
    // destructuring to do: const { id } = props.match.params;
    dispatch(getOneProject(props.match.params.id));
  }, [dispatch, props.match.params.id]); // eslint-disable-line

  return (
    <div>
      <ProjectById selectedProject={selectedProject} />
    </div>
  );
}

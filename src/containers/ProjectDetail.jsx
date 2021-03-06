import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getOneProject } from '../redux/reducers/projects/actions';
import { getProject } from '../redux/reducers/projects/selector';
import { ProjectById } from '../components';

export default function ProjectDetail(props) {
  const selectedProject = useSelector(getProject);
  const dispatch = useDispatch();

  useEffect(() => {
    const { id } = props.match.params;
    dispatch(getOneProject(id));
  }, [dispatch, props.match.params.id]); // eslint-disable-line

  return (
    <div>
      <ProjectById selectedProject={selectedProject} />
    </div>
  );
}

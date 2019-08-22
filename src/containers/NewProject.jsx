import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postProject } from '../redux/reducers/projects/actions';
import { postNewProject } from '../redux/reducers/projects/selector';
import PostingProject from '../components/PostingProject';

export default function NewProject() {
  const newProject = useSelector(postNewProject);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postProject());
  }, [dispatch]);

  return (
    <div>
      <PostingProject newProject={newProject} />
    </div>
  );
}

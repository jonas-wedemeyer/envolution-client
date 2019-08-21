import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function AddProject() {
  // const loggedInUser = useSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch();
  }, [dispatch]); // check if this array requires a second element

  return <div>{/* <UserInfo loggedInUser={loggedInUser} /> */}</div>;
}

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getOneUser } from '../redux/reducers/authentication/actions';
import getUser from '../redux/reducers/authentication/selector';
import UserInfo from '../components/UserInfo';

export default function UserProfile() {
  const loggedUser = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneUser());
  }, [dispatch]);
  return (
    <div>
      <UserInfo loggedUser={loggedUser} />
    </div>
  );
}

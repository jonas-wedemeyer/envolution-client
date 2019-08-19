import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import UserInfo from '../components/UserInfo';
// import action/ selector after pull from Jonas' merge
// const selectedUser = useSelector(getUser);

export default function UserProfile() {
  useEffect(() => {});

  return (
    <div>
      <UserInfo />
    </div>
  );
}

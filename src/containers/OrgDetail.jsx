import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getOneOrg from '../redux/reducers/orgs/actions';
import getOrg from '../redux/reducers/orgs/selector';
import { OrgById } from '../components';

export default function OrgDetail(props) {
  const selectedOrg = useSelector(getOrg);
  const dispatch = useDispatch();
  const { history } = props;

  useEffect(() => {
    const { orgId } = props.match.params;
    dispatch(getOneOrg(orgId));
  }, [dispatch, props.match.params.orgId]); // eslint-disable-line

  return (
    <div>
      <OrgById selectedOrg={selectedOrg} history={history} />
    </div>
  );
}

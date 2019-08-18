import { combineReducers } from 'redux';

import projects from './projects/reducer';
import organizations from './orgs/reducer';
import authentication from './authentication/reducer';

export default combineReducers({
  authentication,
  projects,
  organizations,
});

import { combineReducers } from 'redux';

import projects from './projects/reducer';
import organizations from './orgs/reducer';

export default combineReducers({
  projects,
  organizations,
});

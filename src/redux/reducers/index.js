import { combineReducers } from 'redux';
import activity from './activity';
import showFilter from './showFilter';
import update from './update';

const myclientsApp = combineReducers({
  activity,
  showFilter,
  update
})

export default myclientsApp;
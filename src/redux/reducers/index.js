import { combineReducers } from 'redux';
import activity from './activity';
import showFilter from './showFilter';

const myclientsApp = combineReducers({
  activity,
  showFilter
})

export default myclientsApp;
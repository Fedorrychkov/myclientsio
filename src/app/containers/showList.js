import { connect } from 'react-redux';
import { addActivity, updateStore } from '../../redux/actions/actions';
import ClientList from '../components/cabinet/indexpage/client-list/client-list';

const getVisibleActivity = (activity, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
        return activity;
    default:
        return activity;
  }
}

// const setValues = (dispatch, activity, reloadState) => {
//   switch (reloadState) {
//     case 'UPDATE_STORE':
//       return dispatch(addActivity(activity));
//     case 'NOT_UPDATE_STORE':
//       return undefined;
//     default:
//       return dispatch(addActivity(activity));
//   }
// }

const mapStateToProps = (state) => {
  return {
    activity: getVisibleActivity(state.activity, state.showFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fill: (activity) => {
      dispatch(addActivity(activity));
    }
  }
}

const ShowList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientList)

export default ShowList;
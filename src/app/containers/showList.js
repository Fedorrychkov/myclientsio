import { connect } from 'react-redux';
import { addActivity } from '../../redux/actions/actions';
import ClientList from '../components/cabinet/indexpage/client-list/client-list';

const getVisibleActivity = (activity, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return activity;
        default:
            return activity;
    }
}

const mapStateToProps = (state) => {
    
  return {
    activity: getVisibleActivity(state.activity, state.showFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fill: (activity) => {
      dispatch(addActivity(activity))
    }
  }
}

const ShowList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClientList)

export default ShowList;
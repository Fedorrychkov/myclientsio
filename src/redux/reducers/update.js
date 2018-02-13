const update = (state = 'UPDATE_STORE', action) => {
    switch (action.type) {
      case 'SET_STATE_UPDATE':
        return action.reload;
      default:
        return state;
    }
}

export default update;
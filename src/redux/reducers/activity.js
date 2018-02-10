const activity = (state = [], action) => {
    switch (action.type) {
      case 'ADD_ACTIVITY':
        return [
          ...state,
          {
            id: action.activity.id,
            name: action.activity.name,
            phone: action.activity.phone,
            email:  action.activity.email,
            status: action.activity.status,
            address: action.activity.address,
            activeDate: action.activity.activeDate
          }
        ]
      default:
        return state;
    }
  }
  
  export default activity;
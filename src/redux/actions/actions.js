export const addActivity = activity => {
  return {
    type: 'ADD_ACTIVITY',
    activity
  }
}
export const setShowFilter = (filter) => {
  return {
    type: 'SET_SHOW_FILTER',
    filter
  }
}
export const updateStore = (update) => {
  return {
    type: 'SET_STATE_UPDATE',
    update
  }
}
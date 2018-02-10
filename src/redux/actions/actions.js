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
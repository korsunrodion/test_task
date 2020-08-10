function editUsers(state = {
  isFetching: false,
  users: []
}, action
) {
  switch (action.type) {
    case 'REQUEST_ROWS':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'RECEIVE_ROWS':
      return Object.assign({}, state, {
        isFetching: false,
        users: action.data
      })
    case 'ADD_ROW':
      return Object.assign({}, state, {
        isFetching: false,
        users: [...state.users, action.data]
      })
    case 'UPDATE_ROW':
      let index_updated = state.users.map(u => u.id).indexOf(action.data.id)
      Object.assign(state.users[index_updated], action.data)
      return Object.assign({}, state, {
        isFetching: false
      })
    case 'DELETE_ROW':
      return Object.assign({}, state, {
        isFetching: false,
        users: state.users.filter(u => u.id !== action.data.id)
      })
    default: 
      return state
  }
}

export default editUsers
// для сигнала о начале обновления
export function requestRows() {
  return {
    type: 'REQUEST_ROWS'
  }
}

// обновить строки таблицы
export function receiveRows(json) {
  return {
    type: 'RECEIVE_ROWS',
    data: json
  }
}

// добавить строку пользователя
export function addRow(userData) {
  return {
    type: 'ADD_ROW',
    data: userData
  }
}

// обновить строку пользователя
export function updateRow(userData) {
  return {
    type: 'UPDATE_ROW',
    data: userData
  }
}

// удалить строку пользователя
export function deleteRow(userData) {
  return {
    type: 'DELETE_ROW',
    data: userData
  }
}

// добавление пользователя
export async function fetchAddUser(dispatch, userData) {
  dispatch(requestRows())
  return await fetch('http://myapi9999.com/addUser', {
    method: 'POST',
    body: JSON.stringify(userData)
  })
  .then( response => response.json() )
  .then( updatedUser => dispatch(addRow(updatedUser[0])) )
}

// удаление пользователя
export async function fetchDeleteUser(dispatch, userData) {
    dispatch(requestRows())
    return await fetch('http://myapi9999.com/deleteUser', {
      method: 'POST',
      body: JSON.stringify(userData)
    })
    .then( response => response.json() )
    .then( deletedUser => dispatch(deleteRow(deletedUser[0])) )
}

// обновление данные о пользователе
export async function fetchUpdateUser(dispatch, userData) {
    dispatch(requestRows())
    return await fetch('http://myapi9999.com/updateUser', {
      method: 'POST',
      body: JSON.stringify(userData)
    })
    .then( response => response.json() )
    .then( updatedUser => dispatch(updateRow(updatedUser[0])) )
}

// получить список пользователей
export async function fetchUsers(dispatch) {
  dispatch(requestRows())
  return await fetch('http://myapi9999.com/users')
  .then( response => response.json() )
  .then( json => dispatch(receiveRows(json)) ) 
}
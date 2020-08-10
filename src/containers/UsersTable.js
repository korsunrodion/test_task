import React from 'react'
import { fetchAddUser, fetchUpdateUser, fetchDeleteUser } from '../actions/users'
import UsersTableComponent from '../components/UsersTable'
import { useDispatch, useSelector } from 'react-redux'

export default function UsersTable() {
  const { users, isFetching } = useSelector( store => store.data )
  const dispatch = useDispatch()

  return <UsersTableComponent 
    users={ users } 
    isFetching={ isFetching } 
    addUser={ data => fetchAddUser(dispatch, data) }
    updateUser={ data => fetchUpdateUser(dispatch, data) }
    deleteUser={ data => fetchDeleteUser(dispatch, data) }
  />
}   
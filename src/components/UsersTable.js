import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import './styles/UsersTable.css'

function UsersTable({ users, isFetching, addUser, updateUser, deleteUser }) {
  const columns = React.useMemo(() => [
    { title: 'Login', field: 'login', validate: rowData => rowData.login !== undefined && /^[a-zA-Z][\w\d]+/.test(rowData.login) },
    { title: 'Email', field: 'email', validate: rowData =>  /^[a-zA-Z].*@\w.*\.\w+$/.test(rowData.email) },
    { title: 'Country', field: 'country'},
    { title: 'Sex', field: 'sex', lookup: { 'M': 'Male', 'F': 'Female', 'O': 'Other' }, cellStyle: {minWidth:'70px'}, width: 120},
    { title: 'Age', field: 'age', type: 'numeric', align: 'left', width: 100}
  ], []);

  const tableRef = useRef(null);

  return (
    <MaterialTable
      tableRef={tableRef}
      title="Users List"
      columns={columns}
      data={users}
      isLoading={isFetching}
      options={{
        pageSize: 10,
        pageSizeOptions: [10, 20, 50]
      }}
      editable={{
        onRowAdd: (newData) => new Promise((resolve) => {
          addUser(newData)
          if (tableRef.current.state.data.length + 1 > tableRef.current.state.pageSize) {
            setTimeout(() => {
              const lastPage = Math.ceil((tableRef.current.state.data.length + 1) / tableRef.current.state.pageSize) - 1
              tableRef.current.onChangePage(null, lastPage)
            }, 1000)
          }
          resolve()
        }),
        onRowUpdate: (newData) => new Promise((resolve) => {
          updateUser(newData)
          resolve()
        }),
        onRowDelete: (oldData) => new Promise((resolve) => {
          deleteUser(oldData)
          resolve()
        }),
      }}
      
    />
  );
}

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  addUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired
}

export default UsersTable;
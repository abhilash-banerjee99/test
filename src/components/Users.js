import React from 'react';
import {makeStyles} from '@material-ui/styles'
import {DataGrid} from '@material-ui/data-grid';
import TablePagination from '@material-ui/core/TablePagination';

const useStyles = makeStyles((theme)=>({
  root:{
    display: 'flex',
  },
}))
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 50 },
  { id: 6, lastName: 'Melisandre', firstName: 'Will', age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Dey', firstName: 'Rupak', age: 40 },
  { id: 11, lastName: 'Ghosh', firstName: 'Ritusree', age: 26 },
  { id: 12, lastName: 'Deb', firstName: 'Subham', age: 55 },
  { id: 13, lastName: 'Banerjee', firstName: 'Abhilash', age: 22 },
  { id: 14, lastName: 'Banerjee', firstName: 'Ayantika', age: 25 },
  { id: 15, lastName: 'Banerjee', firstName: 'Ayan', age: 40 },
  { id: 16, lastName: 'Banerjee', firstName: 'Rekha', age: 65 },
  { id: 17, lastName: 'Das', firstName: 'Nirman', age: 31 },
  { id: 18, lastName: 'Shikdar', firstName: 'Anirban', age: 39 },
  { id: 19, lastName: 'Paul', firstName: 'Sourit', age: 34 },
  { id: 20, lastName: 'Jio', firstName: 'Rai', age: 27 },
  { id: 21, lastName: 'Das', firstName: 'Shreya', age: 32 },
  { id: 22, lastName: 'Bhattacharya', firstName: 'Riju', age: 41 },
  { id: 23, lastName: 'Ali', firstName: 'Ashif', age: 30 },
  { id: 24, lastName: 'Hore', firstName: 'Pritam', age: 29 },
  { id: 25, lastName: 'Mondal', firstName: 'Debarati', age: 22 },
  { id: 26, lastName: 'Chanda', firstName: 'Kritika', age: 25 },
  { id: 27, lastName: 'Bose', firstName: 'Hrittik', age: 35 },
  { id: 28, lastName: 'Chowdhury', firstName: 'Anindya', age: 28 },
  { id: 29, lastName: 'Som', firstName: 'Saumya', age: 50 },
  { id: 30, lastName: 'Das', firstName: 'Aditya', age: 30 },
];

export default function DataTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(2)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage =(event, newPage)=>{
    setPage(newPage)
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <div className={classes} style={{ alignContent: "center", marginTop: "10%",height: 550, width: '65%' }}>
      <DataGrid rows={rows} columns={columns} 
      component = {() => (
      <TablePagination  component="div"
      count={100}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={handleChangeRowsPerPage}/>)}  
      checkboxSelection />
      {/* pageSize={5} */}
    </div>
  );
}
import React from 'react'
import {connect } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import useDarkMode from './Hooks/useDarkMode';


function mapStateToProps(state){
return {
    open:state
}
}
function Customers(props) {
  const [colorTheme,setTheme] = useDarkMode();
  console.log(colorTheme)

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];


  return (
    <div class={props.open?'p-10 ml-[40vh]':'p-10'}>
      <div class='p-4 pl-[10vh] pb-[1vh] w-[100%] h-[10vh] bg-slate-200 dark:bg-slate-700 dark:text-slate-200 text-slate-900'>
    <h1 class='text-xl font-semibold'>Customers</h1>
  
      </div>
     <div class='mt-10 w-[100%] p-4 dark:bg-slate-500 bg-slate-200'>
     <div class='p-4 pl-[10vh] pb-[1vh] w-[100%] h-[70vh] bg-slate-200 dark:bg-slate-700 dark:text-slate-200 text-slate-900'>
     <Box sx={{ height: 400, width: '100%' , background:'#1f1f1f',textDecorationColor:'white'
     }}>
      
      <DataGrid
      textDecorationColor='white' 
      sx={{
        color:'white'
      }}
        rows={rows}
        columns={columns}

        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
       

      />
    </Box>
      </div>
    
     </div>
    </div>
  )
}

export default connect(mapStateToProps)(Customers)

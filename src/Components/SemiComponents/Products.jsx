import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {connect} from 'react-redux';
function mapStateToProps(state){
    return {
        open:state
    }
}
export default function MiddleDividers(props) {
  return (
    <Box  class='dark:bg-slate-900 dark:text-green-300 hover:opacity-90 hover:shadow-2xl transition-all bg-slate-300 text-slate-900' sx={{ width: '100%', maxWidth: 360,    color:'white', }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
              {props.name}
            </Typography>
          </Grid>
          <Grid item><br></br>
            <Typography gutterBottom variant="h6" component="div" class='text-green-900 dark:text-slate-300 font-bold'>
             {props.price}
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
       {props.description}
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="body1">
          Select type
        </Typography>
        <Stack direction="row" spacing={3}  class='flex flex-row'>
          <Chip label="4GB" class='dark:text-white text-slate-800 hover:cursor-pointer hover:bg-slate-400 rounded-full' />
          <Chip label="8GB" class='dark:text-white text-slate-800 hover:cursor-pointer hover:bg-slate-400 rounded-full' />
          <Chip label="16GB" class='dark:text-white text-slate-800 hover:cursor-pointer hover:bg-slate-400 rounded-full'/>
          <Chip label="32GB"class='dark:text-white text-slate-800 hover:cursor-pointer hover:bg-slate-400 rounded-full' />
        </Stack>
      </Box>
      
    </Box>
  );
}
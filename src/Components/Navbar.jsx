import React,{useEffect, useState} from 'react';
import { Tooltip } from '@mui/material';
import {IconButton} from '@mui/material';
import { AiFillAlipayCircle, AiFillBell, AiFillCodepenCircle, AiFillGithub, AiFillSketchSquare, AiOutlineMenu, AiOutlineNotification } from 'react-icons/ai';
import store from './Context/Store';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {connect} from 'react-redux';
import useDarkMode from './Hooks/useDarkMode';
function mapStateToProps(state){
  console.log(state,'MAPSTATETOPROPS')
  return{
    open:state
  }
    }
 
  
function Navbar(props) {
  
  //Toggle dark and light mode 
  const [isDark,setDark] = useState(false)
  
  const [colorTheme,setTheme] = useDarkMode();


  const toggleDark = ()=>{
    setDark(!isDark)
    console.log('darkMode',isDark)
    localStorage.setItem('dark',isDark)
  }


const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

  
  
  const buttonSettingSize = ()=>{
    console.log('Now the sidebar should be visible')
    props.dispatch({type:'VISIBLE'})

  }




    const NavButtons = ({title,icon,action})=>{
        return(
          <button onClick={buttonSettingSize}>
            
        <Tooltip  title={title}>
  <IconButton>
{icon}
  </IconButton>
  
</Tooltip></button>)
    }





  return (
    <div class= {props.open?"w-screen h-[10vh] p-5 pl-[50vh] transition-all md:flex md:justify-around dark:text-white  bg-slate-300 dark:bg-slate-800":"w-screen h-[10vh] p-5 transition-all md:flex gap-[20vh] md:w-full  bg-slate-300 dark-text:slate dark:bg-slate-800"} >
      <NavButtons title='Toggle sidebar'  icon={<AiOutlineMenu class='dark:text-green-400' />}  />
      <NavButtons title='Notifications' icon={<AiFillBell class='dark:text-slate-100' />} />
      <NavButtons title='Top deals' icon={<AiFillSketchSquare class='dark:text-slate-100' />} />
      <NavButtons title='Repository for this project' icon={<AiFillGithub class='dark:text-slate-100' />} />
    <div class='float-right pl-[10]vh]'>
    <button  onClick={()=>setTheme(colorTheme)} >
      <FormControlLabel
        control={<MaterialUISwitch id='nightButton' sx={{ m: 0}}  />}

       
      /></button>
 </div>
    </div>
  )

}

export default connect(mapStateToProps)(Navbar)

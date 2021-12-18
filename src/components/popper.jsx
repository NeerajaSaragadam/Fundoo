import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { Typography } from '@mui/material';
import CircleIcon from "@mui/icons-material/Circle";
import { colorUpdate } from '../service/dataservice';
import Dashboard from './pages/dashboard';

export default function SimplePopper(props) {
  // console.log("poppercolors",props);
  
  const open = Boolean(props.anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const colors = ["#2ECC71","#AF7AC5","#F1948A","#A3E4D7","#F5B7B1","#F5B041","#DC7633","#F1C40F","#AAB7B8","#F1948A","#2ECC71","#F5B041"]

  const sendColor = (color) => {
    // console.log(color);
    // props.displayColor(color);
    // console.log(props.action);
    if(props.action=="create"){
      props.displayColor(color);
    } else if(props.action=='update'){
      // 
      let data={
        noteIdList: [props.id],
        color: color
      }
      colorUpdate(data).then((response) => {
       
       props.ListentoColor(true);
     

  
    })
    .catch((error) => {
        console.log(error);
    })

    }
  }

  return (
    <div>
     
      <Popper id={id} open={open} anchorEl={props.anchorEl} placement='top-start'>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
        <Typography style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", backgroundColor: "white",padding:'3px' }} sx={{ p: 1 }}>

{colors.map((color) => (
  <CircleIcon
  onClick={()=> sendColor(color)}
    style={{
      border: "1px solid black",
      color: color,
      borderRadius: "50%",
      margin: "3px",
    }}
  />
))}
</Typography>
            
          
        </Box>
      </Popper>
    </div>
  
  );
}

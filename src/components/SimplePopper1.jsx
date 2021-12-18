import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

export default function SimplePopper1(props) {
 console.log(props);
  const open = Boolean(props.anchorEl);
  const id = open ? 'simple-popper' : undefined;

//   let data = {
//     searchWord: event.target.value
//   }

  return (
    <div>
      
      <Popper id={id} open={open} anchorEl={props.anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          The content of the Popper.
        </Box>
      </Popper>
    </div>
  );
}

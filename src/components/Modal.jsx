import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Takenote3icons from './takenote3icons';
import {UpdateNotes} from '../service/dataservice'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
    console.log("modal",props);
  const [open, setOpen] = React.useState(true);
  

  const titleinput = React.useRef(null);
  const descriptioninput = React.useRef(null);

  const handleClose = () =>{
    setOpen(false);
    
   console.log(titleinput.current.value);
   console.log(descriptioninput.current.value);

   const data = new FormData()
   data.append('noteId',props.note2title.id)
   data.append('title',titleinput.current.value)
   data.append('description',descriptioninput.current.value)
  
  UpdateNotes(data)
      .then((response) => {
          console.log("newdata",response)
          props.ListentoUpdateNotes("Notes");
      }).catch((error) => {
 
      })

  } 
  const handleOpen = () => setOpen(true);


  React.useEffect(()=>{
  setOpen(!open)
  return () =>{
    setOpen(!open)
  }
    
  },[props.open1]) 
  
   
  console.log(open)
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        
        onClose={handleClose}
        // onClose={false}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // style={{backgroundColor: "black"}}
      >
        <Box sx={style} style={{backgroundColor: props.note2title.color}}>
          <Typography id="modal-modal-title" variant="h6" component="h2" >
            {/* {props.note2title.title} */}
            <input className="card1" type="text" ref={titleinput} defaultValue={props.note2title.title}/>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {/* {props.note2title.title} */}
          <input className="card2" type="text" ref={descriptioninput} defaultValue={props.note2title.description}/>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} >
          <Takenote3icons/>
          </Typography>
          <button onClick={handleClose}>close</button>
        </Box>
      </Modal>
    </div>
  );
}

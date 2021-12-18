import { getThemeProps } from '@mui/system';
import React, {useEffect, useState} from 'react'
import './css/takenote3.css';
import Takenote3icons from './takenote3icons';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {UpdateNotes} from '../service/dataservice'



function Takenote3(props) {
   console.log("presentdata",props);
    
    const [isShown, setIsShown] = useState(false);
    const [clickstate, setclickstate] = useState(false);

   
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
      const [open, setOpen] = React.useState(false);
  

      const titleinput = React.useRef(null);
      const descriptioninput = React.useRef(null);

    const handleOpen = () => setOpen(true);
      const handleClose = () =>{
        setOpen(false);
        
       console.log(titleinput.current.value);
       console.log(descriptioninput.current.value);
    
       const data = new FormData()
       data.append('noteId',props.note.id)
       data.append('title',titleinput.current.value)
       data.append('description',descriptioninput.current.value)
      
      UpdateNotes(data)
          .then((response) => {
              console.log("newdata",response)
              props.ListentoUpdateNotes(true);
          }).catch((error) => {
     
          })
    
      } 
      
    
    

    return(
        <div className="takenote3" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} style={{backgroundColor:props.note.color}} >
            
                       
            <div className="takenote31" >
            {/* {clickstate && <BasicModal clickstate={} note2title={props.note} ListentoUpdateNotes={props.ListentoUpdateNotes}/>} */}
            
            {/* <BasicModal open1={clickstate} note2title={props.note} ListentoUpdateNotes={props.ListentoUpdateNotes}/> */}
            <Modal
        open={open}
        
        onClose={handleClose}
        // onClose={false}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // style={{backgroundColor: "black"}}
      >
        <Box sx={style} id="modalstyle"style={{backgroundColor: props.note.color}}>
          <Typography id="modal-modal-title" variant="h6" component="h2" >
            {/* {props.note2title.title} */}
            <input className="card1" type="text" ref={titleinput} defaultValue={props.note.title} />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {/* {props.note2title.title} */}
          <input className="card2" type="text" ref={descriptioninput} defaultValue={props.note.description}/>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} >
          <Takenote3icons/>
          </Typography>
          <button onClick={handleClose}>close</button>
        </Box>
      </Modal>

            <div className="title">
             <input className="card1" type="text" readonly="readonly" placeholder={props.note.title} onClick={handleOpen}/>
            </div>
            <div className="descrpton">
            <input className="card2" type="text" readonly="readonly" placeholder={props.note.description} onClick={handleOpen}/>
            </div>

            {
                     (props.note.collaborators.length!==0) ? (
                         <div className="collab">
                             {
                                 props.note.collaborators.map(() => 
                          <div className="collabicon">
                              <img src="https://img.icons8.com/windows/2x/user-male-circle.png"/>
                          </div>)
                          }
                          </div>
                     ) : null
                 }

            <div className="dwnicn">
             {/* {isShown && <Takenote3icons noteId={props.note.id}  notecolor={props.note.color}/>} */}
             {isShown && <Takenote3icons noteId={props.note.id} ListentoColor={props.ListentoColor} ListentoUpdateDelete={props.ListentoUpdateDelete} ListentoUpdateArchive={props.ListentoUpdateArchive}
             ListentoSlideUpdateArchive={props.ListentoSlideUpdateArchive} ListentoSlideDelete={props.ListentoSlideDelete}/>}
            </div>

            </div>
             
        </div>


    );
}

export default Takenote3;
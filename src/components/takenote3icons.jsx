import React from 'react'
import './css/takenote3icons.css';
import {ArchiveUpdate} from "../service/dataservice";
import SimplePopper from './popper';
import {DeleteUpdate} from "../service/dataservice";

function Takenote3icons(props) {
    

    const [anchorEl, setAnchorEl] = React.useState(null)
    const takeColor = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        // props.popperlist(true);
        // console.log("hader",props);
   }
   const updateTrash = (event) => {
       let trashobj = {
        noteIdList : [event.target.id],
        isDeleted: true
        
        
       }
       DeleteUpdate(trashobj).then((response) =>{
           console.log(response)
         props.ListentoUpdateDelete(true);

         let archiveobj = {
            noteIdList : [event.target.id],
            isArchived: false
           
        }
        ArchiveUpdate(archiveobj).then((response) => {
            console.log(response);
            props.ListentoSlideUpdateArchive(true)
           // props.ListentoUpdateArchive(true);
        
     
          })
         .catch((error) => {
          console.log(error);
      })
       
        
       }).catch((error) =>{
           console.log(error);
       }) 
   }
   
       
    const updateArchive = (event) => {
        // console.log(event.target.id);
        let archiveobj = {
            noteIdList : [event.target.id],
            isArchived: true
           

        }
       ArchiveUpdate(archiveobj).then((response) => {
       console.log(response);
       props.ListentoUpdateArchive(true);

       let trashobj = {
        noteIdList : [event.target.id],
        isDeleted: false
        
        
       }
       DeleteUpdate(trashobj).then((response) =>{
           console.log(response)
           props.ListentoSlideDelete(true)
       }).catch((error)=>{
           console.log(error)
       })
   

     })
    .catch((error) => {
     console.log(error);
 })

 
    }
         return(
        
               <div className="downicons">
                   <button className="remind">

                   </button>
                   <button className="collabartor">

                   </button>
                   <div className="popper">
                   <SimplePopper anchorEl={anchorEl} action="update" id={props.noteId } notecolor={props.notecolor} ListentoColor={props.ListentoColor}/>
                      </div>
                   <button className="changecolor " onClick={takeColor}>

                   </button>
                   <button className="addimg">

                   </button>
                   <button className="archive" id={props.noteId} onClick={updateArchive}>

                   </button>
                   <button className="delete" id={props.noteId} onClick={updateTrash}>

                   </button>
                    <button className="vmore">

                   </button>
        
               </div> 
    );
}

export default Takenote3icons;
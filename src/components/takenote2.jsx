import React from 'react'
import './css/takenote2.css';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {Addnotes} from "../service/dataservice";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import SimplePopper from './popper';
import Collaborator from './Collaborator';


function Takenote2(props) {

  const [notecolor,setnotecolor] = React.useState("");

  const [switchcollaborator,setswitchcollaborator] = React.useState(false)

  const DisplayCollaborator = () =>{
    setswitchcollaborator(true)
       
}
 
const ListentoCollaborator = (data)=>{
    console.log("collabarator",data)
    if(data == true){
        setswitchcollaborator(false)
       
    }
    
}

const [collabdata,setcollabdata] = React.useState([])

const collabArray = (data)=> {
    console.log(data)
    setcollabdata(data)
   
}
console.log("collabdata",collabdata)

    const handleClickAway = (event) => {
        // console.log("hi");
        event.preventDefault()
        props.ListentoTakeNote2(true)
    }
    const [noteobj, setnoteobj] = React.useState({title:"",description:"",isArchived:false})
    const taketitle = (e) => {
        setnoteobj({...noteobj,title:e.target.value})
    }
    const takedescription = (e) => {
        setnoteobj({...noteobj,description:e.target.value})
    }
    const takeArchive = ()=>{
        setnoteobj({...noteobj,isArchived:!noteobj.isArchived})
    }


    const [anchorEl, setAnchorEl] = React.useState(null)
    const takeColor = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        // props.popperlist(true);
        // console.log("hader",props);
   }
   const displayColor = (color) =>{
    //    console.log("display",color);
       setnotecolor(color);
   }
  
    const submit = () => {
        const data = new FormData()
        // console.log("form",data)
        data.append('title',noteobj.title)
        data.append('description',noteobj.description)
        data.append('isArchived',noteobj.isArchived)
        data.append('color',notecolor)
        data.append("collaberators",JSON.stringify(collabdata))
        Addnotes(data)
           .then((response) => {
            //    console.log("newdata",response)
           props.ListentoTakeNote2(false)
            // props.ListentoTakeNote2(true)
           }).catch((error) => {
            //   
            props.ListentoTakeNote2(false)
           })

    }

    return(
        <ClickAwayListener onClickAway={handleClickAway}>
             {
                switchcollaborator ? <Collaborator ListentoCollaborator={ListentoCollaborator} collabArray={collabArray} collabdata={collabdata}/> :
                
                  <div className="note2" style={{backgroundColor:notecolor}}>
        
                <div className="takeanote2feild">
                    <div className="titlesearch">
                    <input className="searchfld2" autocomplete="off" placeholder="Title"  defaultValue=""  type="text" onChange = {taketitle}></input>
                    <button>
     
                    </button>
                    </div>
                    <div className="listitem">
                    <input className="searchfld3" autocomplete="off" placeholder="Description"  defaultValue=""  type="text" onChange = {takedescription}></input>
                    </div>

                 {
                     (collabdata.length!==0) ? (
                         <div className="collab">
                             {
                                 collabdata.map(() => 
                          <div className="collabicon">
                              <img src="https://img.icons8.com/windows/2x/user-male-circle.png"/>
                          </div>)
                          }
                          </div>
                     ) : null
                 }


                    <div className="down">
                    <div className="downicons">
                        <button className="remind2">
     
                        </button>
                        <button className="collabartor2" onClick={DisplayCollaborator}>
     
                        </button>
                        
                       <div className="popper">
                        <SimplePopper anchorEl={anchorEl} displayColor={displayColor} action="create"/>
                           </div>
                        <button className="changecolor2"  onClick={takeColor}>
                        </button>
                       
     
                        <button className="addimg2">
     
                        </button>
                        <button className="archive2" onClick={takeArchive}>
     
                        </button>
                         <button className="vmore2">
     
                        </button>
                        <button className="undo2">
     
                        </button>
                        <button className="redo2">
     
                        </button>
                       
                    </div>
                    <div>
                    <button className="close2" onClick = {submit}>
                          close
                        </button>
                    </div>
                    </div>
                   
                
                </div>
     
                
            </div>
     }
      
       </ClickAwayListener>  
    );
}

export default Takenote2;
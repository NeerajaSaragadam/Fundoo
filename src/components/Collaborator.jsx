import { getThemeProps } from "@mui/system";
import React from "react";
import './css/Collaborator.css';
import SimplePopper1 from "./SimplePopper1";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import {SearchList} from '../service/dataservice';
import { Typography } from '@mui/material';

function Collaborator(props){
    const clickCollaborator = () =>{
        props.ListentoCollaborator(true)

    }
    const [searcArray,setsearchArray] = React.useState([]);
    const [searchword,setsearchword] = React.useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [searchemail,setsearchemail] = React.useState([]);

    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
      console.log(event.target.value)
      setsearchword(event.target.value)
      let data = {
        searchWord: event.target.value
      }
      SearchList(data).then((response) => {
          console.log(response)
          let searcArray = response.data.data.details.filter(function(obj){
              if(obj.email.includes(searchword)){
                  return obj
              }

          })
           
         setsearchArray(searcArray)
         console.log("searcharrayrr",searcArray);
      }).catch((error) =>{
          console.log(error)

      })
    };
   
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const SelectId = (data) => {
        console.log("searchid",data)
        setsearchword(data)
        setAnchorEl(null)
        // let searchemail = data.filter(obj=>obj.email==(searchword))
        // if(searchemail){
        //     setsearchemail(searchemail)
        // }
        // setsearchemail(searchemail => [...searchemail,obj])
    //    var searchemail = obj
    //     setsearchemail(searchemail)
    }
    // console.log("testval",searchemail)
    const getemail = () =>{
         console.log(searcArray)
        let filteremail = searcArray.filter(function(user){
            if(searchword == user.email){
                return user
            }
        })
         console.log(filteremail)
        // setsearchemail(searchword => [...searchword,filteremail[0]])
        props.collabArray([...props.collabdata,filteremail[0]])
        setsearchword("")
        props.ListentoCollaborator(true)
        // setsearchemail(searchemail)
        // console.log(searchemail)
         
    }
    
    return(
        <div>
          <div className="Collaboratormain">
              <div className="Collaborator">
                  <h3>Collaborators</h3>
              </div>
              <hr/>
              <div className="owner">
                  <img src="https://img.icons8.com/windows/2x/user-male-circle.png"/>
                  <h4>Saragadam Neeraja </h4><span>(owner)</span>
                  <p className="oemail">neerajasaragadam12@gmail.com</p>
              </div>
             
              {props.collabdata.map((obj) => (
                  
                   <div className="getemail">
                   <img src="https://img.icons8.com/windows/2x/user-male-circle.png"/>
                   <input className="inputemail" type="text"  value={obj.email} />
                   </div>
                  
                  ))}
              
              <div className="owner1">
              <img src="https://img.icons8.com/windows/2x/user-male-circle.png"/>
              <input className="card11" type="text"  placeholder="person or email to share with" value={searchword}  onChange={handleClick}/>

              <Popper id={id} open={open} anchorEl={anchorEl}>
              <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
            <div>
                  {searcArray.map((search) => (
                   <div onClick={() => SelectId(search.email) }>{search.email} </div>
                  
                  ))}
                  </div>

               {/* hghjgjgbhjgjhgjhghghvvb */}
              </Box>
              </Popper>
              
              </div>
              <div className="footer">
                  <button className="cancel" onClick={clickCollaborator}> Cancel</button>
                  <button className="save" onClick={getemail}> Save</button>

              </div>
             
          </div>
        </div>
    )
}

export default Collaborator
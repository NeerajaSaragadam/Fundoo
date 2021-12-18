import React from 'react'
import './css/takenote1.css';


function Takenote1(props) {
    const changenote = () => {
        
       props.ListentoTakeNote1(true)
    }

    return(

       <div className="note1" onClick={changenote}>
           <div className="takeanotefeild">
           <input className="searchfld" autocomplete="off" placeholder="Take a note..."  value=""  type="text"></input>
           <div className="checkbox">
               <button>

               </button>
           </div>
           <div className="newnote">
               <button>

               </button>
           </div>
           <div className="newimg">
               <button>

               </button>
           </div>
           
           </div>
          
       </div>
        
    );
}

export default Takenote1;
import React, { useState } from 'react'
import Header from '../header';
import Takenote1 from '../takenote1';
import Takenote2 from '../takenote2';
import Takenote3 from '../takenote3';
import MiniDrawer from '../drawer';
import '../css/dashboard.css';
import { border } from '@mui/system';
import { Getnotes } from '../../service/dataservice';




function Dashboard() {
    
    const [switchnote1note2,setswitchnote1note2] = React.useState(false)

    const[currentpage,setcurrentpage] = React.useState("Notes")

    const ListentoTakeNote1= (data) =>{
        console.log('dashhh',data);
        if(data == true){
            setswitchnote1note2(true)
        } else if(data == false){
            setswitchnote1note2(false)
            getNotes(currentpage)
        }

    }

    
    const getNotes = (data) => {
       Getnotes().then((response) =>{
           console.log("seachlish",response);
        let filterArray = response.data.data.data.filter(function(note){
            if(data=="Notes"){
                if(note.isArchived==false && note.isDeleted==false){
                 return note
             }
            }
           if(data=="archive"){
                if(note.isArchived==true && note.isDeleted==false){
                    return note

             }
            }
         if(data=="delete"){
                if(note.isDeleted==true && note.isArchived==false){
                    return note

             }
            
            }
        })
        setNotesArray(filterArray);
        console.log("filteredArray",filterArray)
       }).catch((error) => {
                    console.log(error);
                });

    }
    const [Draweritems,SetDrawerlist] = React.useState(false)
    const Drawerlist= (data) =>{
        // console.log("Dashbo",data);
        if(data == true){
            SetDrawerlist(!Draweritems)
           // <MiniDrawer />
            
       }
    }
    
    const ListentoArchiveList = (data) => {
       setcurrentpage(data)
        getNotes(data)


    }
    const ListentoDeleteList = (data) => {
       setcurrentpage(data)
        getNotes(data)

    }
    const ListentoNotesList = (data) => {
        setcurrentpage(data)
        getNotes(data)

    }
    const ListentoReminerList = (data) => {
        setcurrentpage(data)

    }

    const ListentoUpdateArchive = (data) => {
        console.log("updatedata",data)
       // getNotes(data)
       if(data==true){
        getNotes(currentpage)
    }
    
    }
    const ListentoSlideUpdateArchive = (data) => {
        if(data==true){
            getNotes(currentpage)
        } 
    }
    const ListentoSlideDelete = (data) => {
        if(data==true){
            getNotes(currentpage)
        }
    }
    const ListentoUpdateDelete = (data) => {
        console.log("deletedata",data)
       // getNotes(data)
       if(data==true){
        getNotes(currentpage)
    }
       
   }
         
    const ListentoColor = (data) =>{
        if(data==true){
            getNotes(currentpage)
        }
      

    }
    const ListentoUpdateNotes = (data) =>{
        
        // getNotes(data)
        if(data==true){
            getNotes(currentpage)
        }
        
    }
    

    const [notesArray,setNotesArray] = useState([]);

    React.useEffect(()=>{
        getNotes(currentpage)

    },[])

    return(
        <div className="dashboard">
            <div className="header">
                {/* <Header/> */}
            <Header Drawerlist = {Drawerlist}/>
        </div>  


        <div className="drawer">
            <MiniDrawer Draweritems = {Draweritems} ListentoArchiveList={ListentoArchiveList} ListentoDeleteList={ListentoDeleteList} ListentoNotesList={ListentoNotesList} ListentoColors={ListentoColor}
            ListentoReminerList={ListentoReminerList}/>
            
            {/* {Draweritems || <MiniDrawer Draweritems = {Draweritems}/>} */}

        </div>
       
        <div className="Takenotecontainer">
            {
                switchnote1note2 ? <Takenote2 ListentoTakeNote2 = {ListentoTakeNote1} /> : <Takenote1 ListentoTakeNote1 = {ListentoTakeNote1} />
            }
             {/* <Takenote3 /> */}
        </div> 
        <div className="notescontainer">
        {/* <div>hello</div> */}
            {notesArray.slice(0).reverse().map((note) => (
                
                <Takenote3 note={note} ListentoColor={ListentoColor} ListentoUpdateNotes={ListentoUpdateNotes} ListentoUpdateArchive={ListentoUpdateArchive} ListentoUpdateDelete={ListentoUpdateDelete}
                ListentoSlideUpdateArchive={ListentoSlideUpdateArchive} ListentoSlideDelete={ListentoSlideDelete}/>
                
                
            ))}
            {/* {notesArray.map(() => (
                 
                <div>hello</div>

            ))} */}
        </div>
          
        </div>
              
    );
    
}

// const mapStateToProps = (state) => {
//     console.log(state)
// 	return {
// 		title: state.drawerReducer.title,
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		// fetchBooks: () => dispatch({type : "dd", payload: "data"}),
//         ReminderList: () => dispatch(ReminderList()),
//         ArchiveList: () => dispatch(ArchiveList()),
//         TrashList: () => dispatch(TrashList())
// 	};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

 export default Dashboard;
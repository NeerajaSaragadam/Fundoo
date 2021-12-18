import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useMediaQuery } from 'react-responsive';
import {connect} from 'react-redux';
import {ReminderList,ArchiveList,TrashList} from '../../src/components/redux/DrawerActions'




// const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })



const drawerWidth = 220;
 const margin = 65;
// const margin=40


const openedMixin = (theme) => ({
  width: drawerWidth,
  marginTop: margin,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop: margin,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

 function MiniDrawer(props) {
    console.log("minidrawer",props)
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  console.log("test",props.Draweritems)

React.useEffect(()=>{
  if(props.Draweritems==true){
    setOpen(true);
  } else if(props.Draweritems==false){
    setOpen(false);
  }
},[props.Draweritems])

 const ArchiveList = () => {
   console.log(props);
    // {ArchiveList}
//  props.dispatch({ArchiveList})
  props.dispatch({type : "SET_Title_as_Archive"})
   props.ListentoArchiveList("archive")
   console.log("hello")
 }
 const DeleteList = () => {
  props.dispatch({type : "SET_Title_as_Trash"})
  // props.dispatch({TrashList})
   props.ListentoDeleteList("delete")
   console.log("delete")
 }
 const NotesList = () => {
   props.ListentoNotesList("Notes")
   console.log("Notes")
 }
 const ReminderList = () => {
  props.dispatch({type : "SET_Title_as_Remainder"})
  // props.dispatch({ReminderList})
   props.ListentoReminerList("Reminder")
 }
  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <List>
          <ListItem button onClick={NotesList}>
              <ListItemIcon>
              <img src="https://img.icons8.com/material-outlined/24/000000/light.png" style={{ width: "20px"}}/>
              </ListItemIcon>
              <ListItemText primary= "Notes"/>
            </ListItem>

            <ListItem button onClick={ReminderList}>
              <ListItemIcon>
              <img src="https://img.icons8.com/material/2x/appointment-reminders.png" style={{ width: "20px"}}/>
              </ListItemIcon>
              <ListItemText primary= "Reminders" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
              <img src="https://img.icons8.com/material/2x/edit.png" style={{ width: "20px"}}/>
              </ListItemIcon>
              <ListItemText primary= "Edit labels" />
            </ListItem>

            <ListItem button onClick={ArchiveList}>
              <ListItemIcon>
              <img src="https://img.icons8.com/material/2x/downloads.png" style={{ width: "20px"}}/>
              </ListItemIcon>
              <ListItemText primary= "Archive" />
            </ListItem>

            <ListItem button onClick={DeleteList}>
              <ListItemIcon>
              <img src="https://img.icons8.com/material/2x/trash.png" style={{ width: "20px"}}/>
              </ListItemIcon>
              <ListItemText primary= "Bin" />
            </ListItem>

        </List>
        
      </Drawer>
      
    </Box>
  );
}
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		setArchiveTitle: () => dispatch({type : "SET_Title_as_Archive"}),
       
// 	};
// };
//export default MiniDrawer

 export default connect()(MiniDrawer);
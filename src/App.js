import logo from './logo.svg';
import './App.css';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Router from './router/router';
import Header from './components/header';
import Dashboard from './components/pages/dashboard';
import MiniDrawer from './components/drawer';
import Takenote3 from './components/takenote3';
import Takenote3icons from './components/takenote3icons';
import Collaborator from './components/Collaborator';
import {Provider} from 'react-redux';
import store from './components/redux/store';

function App() {
  return (
    <div className="App">
      {/* <Collaborator/> */}
      {/* <Takenote3icons/> */}
     {/* <SignIn />
     <SignUp /> */}
     <Provider store={store}>
     <Router />
     </Provider>
     {/* <Dashboard/> */}
     {/* <MiniDrawer/> */}
     {/* <Takenote3 /> */}
    </div>
  );
}

export default App;

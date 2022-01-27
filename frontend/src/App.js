import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import { Messenger } from './components/Messenger';
function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/messenger/register" component={Register}></Route>
       <Route exact path="/messenger/login" component={Login}></Route>
       <Route exact path="/" component={Messenger}></Route>
     </Switch>

   </Router>
  );
}


export default App;

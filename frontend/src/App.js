import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/messenger/register" component={Register}></Route>
       <Route exact path="/messenger/login" component={Login}></Route>
     </Switch>

   </Router>
  );
}


export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginForm from './components/LoginForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from './Home';


function App() {
  const token = localStorage.getItem('token')

  return (
    <div className="App">
    <Router>
      <Route exact path="/">
        {!token ? <Redirect to="/login" /> : <Home/>}
      </Route>
       
      <Route path="/login">
        {!token ? <LoginForm/> : <Redirect to="/" />} 
      </Route>
     
    </Router>
    </div>
  );
}

export default App;

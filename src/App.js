import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [token] = useLocalStorage('token')

  return (
    
      <div className="App">
      <Router>
        <Route exact path="/">
          {!token ? <Redirect to="/login" /> : <Home/>}
        </Route>
        
        <Route path="/login">
          {!token ? <Login/> : <Redirect to="/" />} 
        </Route>

        <Route path="/search">
          {!token ? <Redirect to="/login" /> : <SearchResults/>}
        </Route>
      
      </Router>
      </div>
  
  );
}

export default App;

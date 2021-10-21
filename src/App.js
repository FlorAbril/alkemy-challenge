import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginForm from './components/LoginForm';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import Home from './pages/Home';
import SearchResults from './components/SearchResults';
import { useLocalStorage } from './hooks/useLocalStorage';
import HeroesProvider from './store/HeroesProvider';

function App() {
  const [token] = useLocalStorage('token')

  return (
    <HeroesProvider>
      <div className="App">
      <Router>
        <Route exact path="/">
          {!token ? <Redirect to="/login" /> : <Home/>}
        </Route>
        
        <Route path="/login">
          {!token ? <LoginForm/> : <Redirect to="/" />} 
        </Route>

        <Route path="/search">
          <SearchResults/>
        </Route>
      
      </Router>
      </div>
    </HeroesProvider>
  );
}

export default App;

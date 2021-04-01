import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import KulkasPost from './container/UTS/KulkasPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartPost from './container/UTS/CartPost';
import About from './container/UTS/About';
 

function App() {
  return (
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/cart'} className="nav-link">Cart</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
          </nav>
          <br />
          <Switch>
              <Route exact path='/' component={KulkasPost} />
              <Route path='/cart' component={CartPost} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;

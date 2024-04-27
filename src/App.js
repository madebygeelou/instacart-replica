import './App.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Products from './pages/Products.js'
import Home from './pages/Home.js'
import Cart from './pages/Cart.js'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="./Products.js">Products</Link></li>
            <li><Link to="/Home.js">Home</Link></li>
            <li><Link to="/Cart.js">Cart</Link></li>
          </ul>
        </nav>
        <Routes>
        <Route path="./Home.js" exact component={Home} />
        <Route path="./Products.js" component={Products} />
        <Route path="./Cart.js" component={Cart} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

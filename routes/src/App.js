import './App.css';
import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom';
import Home from './home.jsx';
import BTCconverter from './Components/convertBTC.jsx';
import Shop from './Components/Shop/shop.jsx';
import Users from './Users.jsx';
import Navigation from './Components/Navigation.jsx';
import Movies from './Components/Movies.jsx';

function App() {
  return (
    <div>
    <Router>
      <nav>
        <Link to="/home"><button type="button">Home</button></Link>
        <Link to="/convertBTC"><button type="button">BTC Converter</button></Link>
        <Link to="/shop"><button type="button">Warhammer Shop</button></Link>
        <Link to="/users"><button type="button">Users</button></Link>
        <Link to="/movies"><button type="button">Movies</button></Link>
        {/* <Navigation /> */}
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/convertBTC" element={<BTCconverter />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<Users />} />
        <Route path="/movies" element={<Movies />} />
      </Routes> 
    </Router>
    </div>
  );
}

export default App;

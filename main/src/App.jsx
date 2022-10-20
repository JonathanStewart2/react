import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router, Link, Routes, Route,
} from 'react-router-dom';
import Home from './home';
import BTCconverter from './Components/convertBTC';
import Shop from './Components/Shop/Shop';
import Users from './Users';
import Movies from './Components/Movies/Movies';
import Searchbar from './Components/Searchbar/searchable-list';
import FilmDetails from './Components/Movies/FilmDetails';


function App() {
  return (
    <div class="mainDiv">
      <Router>
        <nav class="navClass">
          <Link to="/home"><button className="btn btn-primary" type="button">Home</button></Link>
          <Link to="/convertBTC"><Button variant="outline-warning" type="button">BTC Converter</Button></Link>
          <Link to="/shop"><Button variant="info" type="button">Shop</Button></Link>
          <Link to="/users"><Button variant="secondary" type="button">Users</Button></Link>
          <Link to="/movies"><Button variant="outline-success" type="button">Movies</Button></Link>
          <Link to="/search"><Button variant="dark" type="button" >Search</Button></Link>
          {/* <Navigation /> */}
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/convertBTC" element={<BTCconverter />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<Users />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<FilmDetails />} />
          <Route path="/search" element={<Searchbar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

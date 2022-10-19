import './App.css';
import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom';
import Home from './home.jsx';
import BTCconverter from './Components/convertBTC.jsx';

function App() {
  return (
    <Router>
      <nav>
        <Link to="./home.jsx"><button type="button">Home</button></Link>
        <Link to="./convertBTC.jsx"><button type="button">BTC Converter</button></Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/convertBTC" element={<BTCconverter />} />
      </Routes> 

    </Router>
  );
}

export default App;

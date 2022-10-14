import './App.css';
//import Person from './person.jsx';

import Converter from './Components/States/Converter.jsx';
import Miles2Km from './Components/States/Miles2Km.jsx';
import Content from './Components/Content.jsx'
import LoginControl from './Components/States/LoginControl.jsx'
import MoreProps from './Components/Props/MoreProps.jsx'

//function App() {
const App = () => {
 
  return (
    <div className="App">
      <Converter />
      <br />
      <Miles2Km /> <br />
      <MoreProps num={5} />
      <Content /> <br />
      <LoginControl />
    </div>
    );
}

export default App;

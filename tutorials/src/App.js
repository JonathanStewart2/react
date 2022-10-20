import './App.css';

import Converter from './Components/States/Converter.jsx';
import Miles2Km from './Components/States/Miles2Km.jsx';
import Content from './Components/Content.jsx'
import LoginControl from './Components/States/LoginControl.jsx'
import MoreProps from './Components/Props/MoreProps.jsx'
import TrueFalse from './Components/States/TrueFalse.jsx'
import Game from './Components/States/Game.jsx'

const App = () => {
 
  return (
    <div className="App">
      <Game />
      <Converter />
      <br />
      <Miles2Km /> <br />
      <TrueFalse />
      <MoreProps num={5} />
      <LoginControl />
      <Content /> <br />
    </div>
    );
}

export default App;

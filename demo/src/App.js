import './App.css';
import Person from './person.jsx';
import MyComponent from './MyComponent.jsx';
import ComponentWithProps from './Components/Props/ComponentWithProps.jsx';
import Products from './Components/Props/Products.jsx';
import MoreProps from './Components/Props/MoreProps.jsx';
import Steps from './Components/States/MilesAhead.jsx';
import TrueFalse from './Components/States/TrueFalse.jsx';
import Counter from './Components/States/Counter.jsx';
import Converter from './Components/States/Converter.jsx';


//function App() {
const App = () => {
 
  return (
    <div className="App">
      <Converter />
      <MyComponent />
       <Person />
       <ComponentWithProps />  
       <Products
          name="Pepsi"
          price={1.50}
          descript="Like Coke but sweeter" />  
        <Products name="Mountain Dew" price={1.99} descript="Fluorescent" />
        <MoreProps num={5} />
        <MoreProps num={127} />
        <Steps />
        <TrueFalse />
        <Counter />
    </div>
    );
}

export default App;

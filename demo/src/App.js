import './App.css';
import Person from './person.jsx';
import MyComponent from './MyComponent.jsx';
import ComponentWithProps from './Components/Props/ComponentWithProps.jsx';
import Products from './Components/Props/Products.jsx';
import MoreProps from './Components/Props/MoreProps.jsx';


//function App() {
const App = () => {
 
  return (
    <div className="App">
      <MyComponent />
       <Person />
       <ComponentWithProps />  
       <Products
          name="Pepsi"
          price={1.50}
          descript="Like Coke but sweeter" />  
        <Products name="Mountain Dew" price={1.99} descript="Fluorescent" />
        <MoreProps num={5} />
    </div>
    );
}

export default App;

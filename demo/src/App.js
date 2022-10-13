import './App.css';
import Person from './person.jsx';
import MyComponent from './MyComponent.jsx';
import ComponentWithProps from './ComponentWithProps.jsx'


//function App() {
const App = () => {
 
  return (
    <div className="App">
      <MyComponent />
       <Person />
       <ComponentWithProps />        
    </div>
    );
}

export default App;

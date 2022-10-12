import logo from './logo.svg';
import './App.css';


//function App() {
const App = () => {
  const me = {
    forename: "Jin",
    surname: "Sakai",
    occupation: "Samurai",
    aka: "Ghost",
    location: "Tsushima Island"
}

  const generatePerson = (p) => {
    return `${p.forename} ${p.surname} is known as ${p.aka} and lives on ${p.location}`
  }

  let description = generatePerson(me);

return (
    <div>
        <h1>{me.forename}</h1>
        <h1>{me.surname}</h1>
        <h1>{me.occupation}</h1>
        <h1>{me.aka}</h1>
        <h1>{me.location}</h1>
        <h2>{description}</h2>

    </div>
);
}


export default App;

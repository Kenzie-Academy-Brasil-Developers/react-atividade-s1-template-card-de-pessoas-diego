import logo from './logo.svg';
import './App.css';

import Infouser from './components/Developer.jsx'

function App() {

  const infos = {name: "Gabriel", age: 19, country: "Brasil"}
  const infosDev2 = {name: "Felipe", age: 28, country: "Brasil"}
  const infosDev3 = {name: "Mariana", age: 24, country: "Itália"}

  return (
    <div className="App">
      <header className="App-header">
          <Infouser name={infos.name} age={infos.age} country={infos.country}/>
          <Infouser name={infosDev2.name} age={infosDev2.age} country={infosDev2.country}/>
          <Infouser name={infosDev3.name} age={infosDev3.age} country={infosDev3.country}/>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import Address from './components/Address.js';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Clock from './components/Clock.jsx';
import MilesAhead from './components/MilesAhead';
import Clock2 from './components/Clock2';
import Form from './components/Form';
import Car from './components/Car';
import ProductTable from './components/ProductTable';


const name = "KESTER";

const person = {
  name: "KESTER",
  age: 27
}


function App() {
  return (
    <div className="App">
      <Header />
      <p>
        HELLO {name}, who is age {person.age}!
      </p>
      <h3>This is my address:</h3>
      <Address street="Rhodeswell Road" />

      <h3>This is my other address: </h3>
      <Address />

      <Clock />

      <MilesAhead />

      <Clock2 />

      <Form />

      <Car />

      <ProductTable />
      <Footer />
    </div>
  );
}

export default App;

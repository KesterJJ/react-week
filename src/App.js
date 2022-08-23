import './App.css';
import Address from './components/Address.js';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';


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
      <Address />

      <Footer />
    </div>
  );
}

export default App;

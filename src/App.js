import './App.css';

import { useState } from "react";
import FruitList from './components/DisplayFruits';

function App() {

  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
   ]);

  return (
    <div className="App">
      <header className="App-header">
        <FruitList item={fruits} setFruits={setFruits}/>
      </header>
    </div>
  );
}

export default App;

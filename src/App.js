import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("Sufyan");
  const [age, setAge] = useState(20);

  function decrement() {
    if (count === 0) return;
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  function reset() {
    setCount(count * 0);
    setName("Sufyan");
    setAge(20);
  }

  const nameChange = () => {
    setName("Sufyan Saleem");
  }

  const ageChange = () => {
    setAge(Math.floor(Math.random() * 35));
  }

  return (
    <div className='main-container'>
      <h1>
        Counter
      </h1>
      <div className='container'>
        <button onClick={decrement}>
          -
        </button>
        <p>{count}</p>
        <button onClick={increment}>
          +
        </button>
        <button onClick={reset}>
          Reset
        </button>
      </div>
      <div className='container'>
        <p>{name}</p>
        <button onClick={nameChange}>Change Name</button>
      </div>
      <div className='container'>
        <p>{age}</p>
        <button onClick={ageChange}>Change Age</button>
      </div>
    </div >
  );
}

export default App;

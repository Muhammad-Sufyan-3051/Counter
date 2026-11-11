import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function decrement() {
    if (count === 0) return;
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  function reset() {
    setCount(count * 0);
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
    </div >
  );
}

export default App;

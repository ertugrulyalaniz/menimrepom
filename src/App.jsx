import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Title from './components/title';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Title />
        <button onClick={() => alert('BOM')}>ALERT</button>
      </div>
      <span>{count}</span>
      <span>Sayac:</span>
    </>
  );
}

export default App;

import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/companies`);
      const body = await response.json();
      console.log(body);
    })()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

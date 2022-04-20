import logo from './logo.svg';
import './App.css';
import Components1 from './Components1.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <Components1/>
        </p>
      </header>
    </div>
  );
}

export default App;

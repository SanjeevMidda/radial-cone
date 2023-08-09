import './index.css';
import Circle from './components/Circle';

function App() {
  return (
    <div className="App">
      <nav>
        <h3>01 HOME</h3>
        <h3>02 WORKS</h3>
        <h3>03 TOOLS</h3>
      </nav>

      <div className="content">
        <Circle animation="move 5s linear infinite alternate"/>
        <Circle animation="moveTwo 5s linear infinite alternate"/>
      </div>

      <footer>
        <h3>A</h3>
        <h3>B</h3>
      </footer>
    </div>
  );
}

export default App;

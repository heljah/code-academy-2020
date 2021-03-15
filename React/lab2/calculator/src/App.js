import './App.css';
import Clock from './Clock.js';
import Random from './Random.js';


function App() {
  return (
    <div className="App">
      <Clock/>
      <Random min="1" max="20"/>
    </div>
  );
}
export default App;

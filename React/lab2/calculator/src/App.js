import './App.css';
import Clock from './Clock.js';
import Random from './Random.js';
import Calculate from './Calculate.js';
import FCalculate from './FCalculate.js';

function App() {
  return (
    <div className="App">
      <Clock/>
      <Random min="1" max="20"/>
      <Calculate />
      <FCalculate />
    </div>
  );
}
export default App;

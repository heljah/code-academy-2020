import './App.css';
import Clock from './Clock.js';
import Random from './Random.js';
import Calculate from './Calculate.js';


function App() {
  return (
    <div className="App">
      <Clock/>
      <Random min="1" max="20"/>
      <Calculate />
    </div>
  );
}
export default App;

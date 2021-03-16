import './App.css';
import Clock from './Clock.js';
import Random from './Random.js';
import Calculate from './Calculate.js';
import FCalculate from './FCalculate.js';
import Person from './Components/Person.js';
import People from './Components/People.js';

function App() {
  return (
    <div className="App">
      <p>Kelloharjoitus:</p>
      <Clock/>
      <p>Starwars fetch api -harjoitus</p>
      <Person />
      <p>Lista + index -harjoitus</p>
      <People />
      <p>Randomluku-harjoitus</p>
      <Random min="1" max="20"/>
      <p>Ynnäystä luokkakomponentilla</p>
      <Calculate />
      <p>Laskutoimituksia funktiopohjaisesti</p>
      <FCalculate />      
    </div>
  );
}
export default App;

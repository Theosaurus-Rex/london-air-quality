
import './App.css';

import ForecastText from "./components/ForecastText";

function App() {
  return (
    <div className="App">
      
      <ForecastText/>
      <ul class="cb-slideshow">
	        <li>
		        <span>Image 01</span>
	        </li>
	        <li>
            <span>Image 02</span>
          </li>
	        <li>
            <span>Image 03</span>
          </li>
          <li>
            <span>Image 04</span>
          </li>
          <li>
            <span>Image 05</span>
          </li>
          <li>
            <span>Image 06</span>
          </li>
      </ul>
    </div>
  );
}

export default App;

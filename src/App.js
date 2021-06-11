import './App.css';
import Ayyyyy from './components/ayyyyy'
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ayyyyy />
      </header>
      <div id='footer'>Powered by Alpha Vantage <br />
        Buy me a share! <a href="https://www.buymeacoffee.com/SonBrooks" target="_blank" variant="caption"><FreeBreakfastIcon />
        </a>
      </div>
    </div>
  );
}

export default App;

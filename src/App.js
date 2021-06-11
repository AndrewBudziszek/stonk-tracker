import './App.css';
import Ayyyyy from './components/ayyyyy'
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';


function App() {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${process.env.REACT_APP_TITLE}`;
  });

  return (
    <div className="App">
      <header className="App-header">
        <Ayyyyy />
      </header>
      <div id='footer'>Powered by Alpha Vantage <br />
        Buy me a share! (or a coffee)<a href="https://www.buymeacoffee.com/SonBrooks" target="_blank" variant="caption"><FreeBreakfastIcon />
        </a>
      </div>
    </div>
  );
}

export default App;

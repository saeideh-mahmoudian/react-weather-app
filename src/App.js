import Weather from "./Weather"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tehran" />
        <footer>
          This project was coded by saeideh Mahmoudian and is <a href="https://github.com/saeideh-mahmoudian/react-weather-app">open-sourced on GitHub</a>
        </footer>
      </div>
    </div>
  );
}



import WeatherSearch from "./WeatherSearch"
import './WeatherApp.css';

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="container">
        <WeatherSearch defaultCity="New York" />
      </div>
    </div>
  );
}



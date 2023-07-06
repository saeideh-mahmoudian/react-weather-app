import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props) {
  const icon = `https://openweathermap.org/img/wn/${props.data.icon}@2x.png`;
  return (
    <div className="WeatherInfo">
      <h1 className="ms-3">{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-7">
          <div className="clearfix">
            <span className="float-left">
              <img src={icon} alt="Weather Icon" width={64}/>
            </span>
            <span className="float-left fs-3">
               {Math.round(props.data.temperature)}°C
            </span>
          </div>
        </div>
        <div className="col-5">
          <ul>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
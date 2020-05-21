import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';


const ForecastDetails = props => {
  return (
    <div className="forecast-details">
      <span className="date">{Moment(props.forecasts.date).format('ddd Do MMM')}</span>
      <br />
      <span className="temperatureMax">Max Temperature: {props.forecasts.temperature.max}°c</span>
      <br />
      <span className="temperatureMin">Min Temperature: {props.forecasts.temperature.min}°c</span>
      <br />
      <span className="humidity">Humidity: {props.forecasts.humidity}%</span>
      <br />
      <span className="wind">Wind Speed: {props.forecasts.wind.speed}mph</span>
    </div>
  );
};

export default ForecastDetails;
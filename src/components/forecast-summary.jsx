import React from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';

import '../styles/forecast-summaries.scss';


const ForecastSummary = props => (
  <div className="forecastSummary">
    <span className="date">{Moment(props.date).format('ddd Do MMM')}</span>;    <span className="forecast-summary__temperature">{props.temperature}</span>
    <span className="forecast-summary__description">{props.description}</span>
    <div className="icon">
      <WeatherIcon name="owm" iconId={props.icon} />
    </div>  
  </div>

);
ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;

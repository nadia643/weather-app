import React from 'react';
// import Moment from 'moment';
import PropTypes from 'prop-types';

import '../styles/forecast-summaries.scss';


const ForecastSummary = props => (
  <div className="forecastSummary">
    <span className="forecast-summary__date">{props.date}</span>
    <span className="forecast-summary__temperature">{props.temperature}</span>
    <span className="forecast-summary__description">{props.description}</span>
    <span className="forecast-summary__icon">{props.icon}</span>
  </div>

);
ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;

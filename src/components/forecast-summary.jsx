
import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import Moment from 'moment';

const ForecastSummary = props => {
  return (
    <div className="each-box">
      <span className="date">{Moment(props.date).format('ddd Do MMM')}</span>
      <div className="icon">
        <WeatherIcon className="icon" name="owm" iconId={props.icon} />
      </div>
      <span className="temperature">{props.temperature}°c</span> 
      <span className="description">{props.description}</span>
      {/* <button className="more-details" onClick={() => props.onSelect(props.date)}>More details</button> */}
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;


import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import Moment from 'moment';

const ForecastSummary = props => {
  return (
    <div>
      <span className="date">{Moment(props.date).format('ddd Do MMM')}</span>;
      <div className="icon">
        <WeatherIcon name="owm" iconId={props.icon} />
      </div>
      <span className="temperature">{props.temperatureMax}°c</span>
      <br />
      <span className="description">{props.description}</span>
      <br />
      <button className="more-details" onClick={() => props.onSelect(props.date)}>More details</button>
    </div>
  );
};

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperatureMax: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;

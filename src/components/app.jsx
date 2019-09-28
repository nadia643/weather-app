import React from 'react';
import LocationDetails from './location-details';
import PropTypes from 'prop-types';
import ForecastSummary from './forecast-summary';
import ForecastSummaries from './forecast-summaries';

import '../styles/app.scss';

const App = props => (
  <div className="forecast">
    <LocationDetails
      city={props.location.city}
      country={props.location.country}
    />
    <ForecastSummary
      date={props.forecasts[0].date}
      temperature={props.forecasts[0].temperature.max}
      description={props.forecasts[0].description}
      icon={props.forecasts[0].icon}
    />
    <ForecastSummaries forecasts={props.forecasts} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

export default App;

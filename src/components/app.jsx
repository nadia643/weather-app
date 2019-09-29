import React from 'react';
import LocationDetails from './location-details';
import PropTypes from 'prop-types';
import ForecastSummary from './forecast-summary';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';

import '../styles/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: this.props.forecasts[0].date,
    };
  }

  render() {
    const selectedForecast = this.props.forecasts.find(forecast => forecast.date === this.state.selectedDate);

    return (
      <div className="forecast">
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
        />
        <ForecastSummaries forecasts={this.state.forecasts} />
        <ForecastDetails forecast={selectedForecast} />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

export default App;

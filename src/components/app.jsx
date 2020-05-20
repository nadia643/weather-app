import React from 'react';
import LocationDetails from './location-details';
import PropTypes from 'prop-types';
import Axios from 'axios';
import ForecastSummary from './forecast-summary';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import SearchForm from './search-form';

import '../styles/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
    this.handleCitySearch = this.handleCitySearch.bind(this);
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  getData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        location: {
          city: data.location.city,
          country: data.location.country,
        },
        forecasts: data.forecasts,
      }));
  }

  componentDidMount() {
    const url = 'https://mcr-codes-weather.herokuapp.com/forecast?city=London';
    this.getData(url);
  }

  handleCitySearch(city) {
    const newCity = city;
    const url = `https://mcr-codes-weather.herokuapp.com/forecast?city=${newCity}`;
    this.getData(url);
  }

  render() {
    const selectedForecast =
      this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);

    return (
      <div className="forecast">
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
        />
        <SearchForm
          handleClick={this.handleCitySearch}
          handleKeyPress={this.handleCitySearch}
        />
        <ForecastSummaries forecasts={this.state.forecasts} onForecastSelect={this.handleForecastSelect} />
        {
          selectedForecast && <ForecastDetails forecast={selectedForecast} />
        }
      </div>
    );
  }
}

// App.propTypes = {
//   location: PropTypes.shape({
//     city: PropTypes.string,
//     country: PropTypes.string,
//   }).isRequired,
//   forecasts: PropTypes.array.isRequired,
// };

export default App;

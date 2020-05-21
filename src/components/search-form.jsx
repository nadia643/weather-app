import React, { Component } from 'react';


class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.state = {
      searchText: '',
    };
  }

  handleInputChange(e) {
    if (e.charCode !== 13) {
      this.setState({ searchText: e.target.value });
    }
  }

  handleCityChange(e) {
    if (e.target.tagName === 'BUTTON' || e.charCode === 13) {
      const newCity = this.state.searchText;
      this.props.handleClick(newCity);
      this.setState({ searchText: '' });
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Insert city name here"
          onChange={this.handleInputChange}
          onKeyPress={this.handleCityChange}
          value={this.state.searchText}
        />
        <button
          className="search-btn"
          type="button"
          onClick={this.handleCityChange}
        >
              Search
        </button>
      </div>
    );
  }
}
export default SearchForm;

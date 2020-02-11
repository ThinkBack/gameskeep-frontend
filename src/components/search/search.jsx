import React from 'react';
import './search.scss';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    const { input } = this.state;

    return (
      <form className="search-bar">
        <input
          type="text"
          value={input}
          className="search-bar search-bar__search-input"
          onChange={e => this.handleChange(e)}
        />
      </form>
    );
  }
}

export default SearchBar;

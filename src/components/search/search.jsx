import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './search.scss';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
  }

  render() {
    const { input } = this.state;

    return (
      <form className="search-bar">
        <FontAwesomeIcon icon="search" />
        <input
          type="text"
          value={input}
          className="search-bar search-bar__search-input"
          onChange={e => this.setState({ input: e.target.value })}
        />
      </form>
    );
  }
}

export default SearchBar;

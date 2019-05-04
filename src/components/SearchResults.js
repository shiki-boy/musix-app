import React, { Component } from 'react'
import Spotify from 'spotify-web-api-js';

const SpotifyApi = new Spotify();

class SearchResults extends Component {

  componentDidMount(){
    const {location} = this.props;
    const params = new URLSearchParams(location.search);

  }

  render() {
    return (
      <div>
        Search Results
      </div>
    )
  }
}

export default SearchResults;

import React, { Component } from 'react'
import Spotify from 'spotify-web-api-js';
import Heading from './Heading';

const SpotifyApi = new Spotify();

class SearchResults extends Component {
  state = {
    artists: [],
    albums: [],
    tracks: []
  }

  getArtists(query) {
    SpotifyApi.searchArtists(query, {
      limit: 1
    })
      .then(data => {
        let x = data.artists.items;
        let ans = []
        for (var i in x) {
          ans.push({
            "genres": x[i].genres,
            "type": x[i].artists,
            "images": x[i].images["0"],
            "name": x[i].name,
            "id": x[i].id,
            "popularity": x[i].popularity
          })
        }
        this.setState({
          artists: this.state.artists.concat(ans)
        })
      })
      .catch(e => console.log(e))
  }

  getAlbums(query) {
    SpotifyApi.searchAlbums(query, {
      limit: 1
    })
      .then(data => {
        console.log(data);
        // let x = data.artists.items;
        // let ans = []
        // for (var i in x) {
        //   ans.push({
        //     "genres": x[i].genres,
        //     "type": x[i].artists,
        //     "images": x[i].images["0"],
        //     "name": x[i].name,
        //     "id": x[i].id,
        //     "popularity": x[i].popularity
        //   })
        // }
        // this.setState({
        //   artists: this.state.albums.concat(ans)
        // })
      })
      .catch(e => console.log(e))
  }

  getTracks() {

  }

  componentDidMount() {
    const { location } = this.props;
    const params = new URLSearchParams(location.search);
    const query = params.get('query');

    if (params.get('artist') === '1') {
      console.log(123)
      this.getArtists(query);
    }
    if (params.get('album') === '1') {
      console.log(123)
      this.getAlbums(query);
    }
  }

  render() {
    return (
      <div>
        <Heading heading="Search Results" />
        Search Results
      </div>
    )
  }
}

export default SearchResults;

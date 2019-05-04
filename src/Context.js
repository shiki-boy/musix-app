import React, { Component } from 'react';
import axios from 'axios';
import Spotify from 'spotify-web-api-js';

const SpotifyApi = new Spotify();

export const Context = React.createContext();

export class Provider extends Component {
  state = {
    songs: [],
    isLoggedIn: false,
    params: null,
    searchResults:[]
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  componentDidMount() {
    const params = this.getHashParams();
    this.setState({
      params,
      isLoggedIn: params.access_token ? true : false
    })
    if (params.access_token) {
      SpotifyApi.setAccessToken(params.access_token);
    }
    SpotifyApi.getNewReleases({
      limit: 10,
      country: "US"
    })
      .then(data => {
        console.log(data);
        let x = data.albums.items;
        let ans = []
        for (var i in x) {
          ans.push({
            "album_type": x[i].album_type,
            "artists": x[i].artists,
            "images": x[i].images["0"],
            "name": x[i].name,
            "id": x[i].id
          })
          // console.log(ans);
        }
        this.setState({
          songs: this.state.songs.concat(ans)
        })
        console.log(this.state);
      })
      .catch(e => {
        window.location.replace('http://localhost:8888')
      })
  }


  render() {
    return (
      <Context.Provider value={{
        state: this.state,
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer; 
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar'
import Search from './components/Search';
import Tracks from './components/Tracks';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import {Provider} from './Context'
import Track from './components/Track';
import SearchResults from './components/SearchResults';

const theme = createMuiTheme({
  typography:{
    fontFamily: "Nunito"
  }
})


class App extends Component {

  render() {
    return (
      <Provider>
        <Router>
          <MuiThemeProvider theme={theme}>
            <div className="App">
              <Navbar />
              <Search />
              <Route path="/" exact component={Tracks} />
              <Route path="/track/:id" component={Track} />
              <Route path="/search" component={SearchResults} />
            </div>
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;

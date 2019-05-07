import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid, Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Redirect} from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    type: 'light'
  },
  typography: {
    fontFamily: "Nunito"
  }
});

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: 25,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
    marginTop: 15,
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
    fontWeight:"bold"
  },
});

class Search extends Component {
  state = {
    checkedAlbum: true,
    checkedTrack: true,
    checkedArtist: true,
    searchIt:false,
    query: ''
  }

  handleChange = name => event => {
    console.log(event.target.checked);
    this.setState({
      [name]: event.target.checked
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      searchIt : true
    })
  }

  handleQuery = event =>{
    this.setState({
      query: event.target.value
    });
  }
  toggleSearch = () => {
    this.setState({
      searchIt:false
    })
  }

  render() {
    const { classes } = this.props;
    if (this.state.searchIt){
      this.toggleSearch();
      let parameters = `
        ?artist=${this.state.checkedArtist? '1' : '0'}
        &album=${this.state.checkedAlbum ? '1' : '0'}
        &track=${this.state.checkedTrack ? '1' : '0'}
        &query=${this.state.query}
        `
      return (
        <Redirect 
          to={{
            pathname: '/search',
            search: parameters.trim().split('\n').map(s=>s.trim()).join('')
          }}
        />
      )
    }
    return (
      <MuiThemeProvider theme={theme} >
        <Grid container direction="row">
          <Grid item xs></Grid>
          <Grid item>
            <Paper className={classes.root} elevation={4}>
              <Typography variant="h5" align="center" component="h3">
                Search for a Song
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <form onSubmit={this.handleSubmit}>
                  <InputBase
                    placeholder="Song Title..."
                    classes={{
                      root: classes.inputoRoot,
                      input: classes.inputInput,
                    }}
                    onChange={this.handleQuery}
                    value={this.state.query}
                  />
                </form>
              </div>
              <div>
                <Grid item xs container direction="row" alignContent="center" justify="center">
                  <FormGroup row>
                    <FormControlLabel control={
                      <Checkbox onChange={this.handleChange('checkedAlbum')}
                        color="secondary" checked={this.state.checkedAlbum}
                        value="checkedAlbum" />
                    } label="Album"
                    />
                    <FormControlLabel control={
                      <Checkbox onChange={this.handleChange('checkedTrack')}
                        color="secondary" checked={this.state.checkedTrack}
                        value="checkedTrack" />
                    } label="Track" />
                    <FormControlLabel control={
                      <Checkbox onChange={this.handleChange('checkedArtist')}
                        color="secondary" checked={this.state.checkedArtist}
                        value="checkedArtist" />
                    } label="Artist" />
                  </FormGroup>
                </Grid>
              </div>
            </Paper>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);

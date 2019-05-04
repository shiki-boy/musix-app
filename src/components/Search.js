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

const theme = createMuiTheme({
  palette: {
    type: 'dark'
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
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
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
    color: "white",
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
    color: "white",
  },
});

class Search extends Component {
  state = {
    show: false,
    checkedAlbum: true,
    checkedTrack: true,
    checkedArtist: true,
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.checked
    })
  }

  render() {
    const { classes } = this.props;
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
                <InputBase
                  placeholder="Song Title..."
                  classes={{
                    root: classes.inputoRoot,
                    input: classes.inputInput,
                  }}
                  onClick={() => !this.state.show}
                />
              </div>
              <div>
                <Grid item xs container direction="row" alignContent="center" justify="center">
                  <FormGroup row>
                    <FormControlLabel control={
                      <Checkbox onChange={this.handleChange('checkedAlbum')}
                        color="secondary" checked="this.state.checkedAlbum"
                        value="checkedAlbum" />
                    } label="Album"
                    />
                    <FormControlLabel control={
                      <Checkbox onChange={this.handleChange('checkedTrack')}
                        color="secondary" checked="this.state.checkedAlbum"
                        value="checkedTrack" />
                    } label="Track" />
                    <FormControlLabel control={
                      <Checkbox onChange={this.handleChange('checkedArtist')}
                        color="secondary" checked="this.state.checkedAlbum"
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

import React, { Component } from 'react'
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import TrackCard from './TrackCard';
import { Consumer } from '../Context';
import Heading from './Heading';
import MyDivider from './MyDivider';

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {(context) => {
          if (context.state.songs.length === 0) {
            return (
              <center>
                <CircularProgress disableShrink color="primary" size={70}/>
                <Typography variant="h5">
                  Loading...
                </Typography>
              </center>
            )
          }
          else {
            return (
              <React.Fragment>
                <MyDivider />
                <Heading heading="New Releases"/>
                <Grid container spacing={0} alignItems="center" direction="row">
                  {context.state.songs.map(song => {
                    return (<TrackCard song={song} key={song.id} />)
                  })}
                </Grid>
              </React.Fragment>
            )
          }
        }}
      </Consumer>
    )
  }
}

export default Tracks;

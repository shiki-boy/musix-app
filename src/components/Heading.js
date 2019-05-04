import React from 'react'
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    textShadow:"-2px 3px 6px #00000070",
    color:"white"
  }
})


function Heading(props) {
  const {classes} = props;

  return (
    <center>
      <Typography className={classes.root} color="primary" variant="h3" gutterBottom>
        {props.heading}
      </Typography>
    </center>
  )
}

Heading.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Heading);

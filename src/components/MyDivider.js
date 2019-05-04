import React from 'react'
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 2.5,
    backgroundColor: "white",
    boxShadow: "-7px 2px 4px 0px black",
  }
})

function MyDivider(props) {
  const { classes } = props;

  return (
    <div>
      <Divider variant="middle" className={classes.root} />
    </div>
  )
}

MyDivider.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(MyDivider);

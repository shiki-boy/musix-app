import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PlayArrow from '@material-ui/icons/PlayArrow';
import { Grid, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';

const theme = createMuiTheme({
  typography: {
    fontFamily: "Nunito",
    fontWeightRegular: "bold"
  },
})

const styles = {
  card: {
    maxWidth: 298,
    marginBottom: 25,
    width: "100%",
    background: "linear-gradient(180deg, #ebeae538 62%, #fdfbfabd 97%, #844b4b26 )",
    borderBottomRightRadius:82,
    borderBottomLeftRadius:82,
    borderTopLeftRadius:132,
    borderTopRightRadius:132,
  },
  media: {
    height: 0,
    paddingTop: '83.25%'
  },
  button: {
    fontWeight: "bold"
  },
  icon:{
    transform: "translateY(3px)",
  }
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <Grid item sm={12} md={4} container justify="center">
        <Card className={classes.card} elevation={6}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.song.images.url}
              title={props.song.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                <PlayArrow className={classes.icon} />
                {props.song.name}
              </Typography>
              {props.song.artists.map(artist => {
                return(
                  <Typography gutterBottom key={artist.id}
                    variant="subtitle1" component="h2" color="primary">
                    - 
                    {artist.name}
                  </Typography>
                )
              })}
              {props.song.album_type !== 'single' ?<Typography gutterBottom variant="subtitle1" component="h2" color="primary">
                Album Name : {props.song.name}
              </Typography>: ''}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" className={classes.button}
              variant="text" color="primary" fullWidth>
              <Link to="/track/1">
                view {props.song.album_type === 'single' ? 'song' : 'album'}
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </MuiThemeProvider>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);

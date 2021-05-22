import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, Theme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import Comments from './comments/Comments';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 560,
  },
  media: {
    height: 260,
  },
  comment: {
    borderRadius: 6,
  },
  commentCount: {
    marginBottom: 0,
    color: grey[900],
  },
  tag: {
    paddingLeft: theme.spacing(5),
    borderColor: grey[500]
  }
}));

const comments: any[] = [
  {
    id: '1',
    text: 'Some comment 1',
    updatedAt: '2h',
    postedBy: {
      id: '1',
      name: 'Tiavina Michael Ralainirina',
    }
  },
  {
    id: '2',
    text: 'Some comment 2 there',
    updatedAt: '10h',
    postedBy: {
      id: '2',
      name: 'Tatiana Maria Ramanantsalama',
    }
  },
];

const Home = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggle = () => setOpen(prev => !prev);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://res.cloudinary.com/lghaauto/w_768,q_auto,f_auto,fl_progressive:semi/kyump/pictures/tvq9xfy54j1d3cyaqwgr.jpg"
        title="Contemplative Reptile"
      />
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography gutterBottom variant="h6" component="h6">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Acces 2020
              </Typography>
            </Box>
            <Box 
              className={classes.comment}
              display="flex"
              alignItems="center"
            >
            <Button size="small" color="primary" onClick={toggle}>
              Commentaires (6)
            </Button>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" mt={2}>
            {['2014', '15000km', 'Essence', 'Automatique'].map((info, index) => (
                <Box
                  key={index} 
                  borderLeft={index !== 0 ? 1: 0} 
                  className={index !== 0 && classes.tag}
                >
                  <Typography>
                    {info}
                  </Typography>
                </Box>
            ))}
          </Box>
        </CardContent>
      <CardActions>
          {open && <Comments comments={comments} /> }
      </CardActions>
    </Card>
  );
}

export default Home;
import React from 'react';
import clsx from 'clsx';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Box, Button, ListSubheader } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      paddingBottom: 0,
      paddingTop: theme.spacing(1),
      borderTop: '1px solid ' + grey[300],
    },
    inline: {
      display: 'inline',
    },
    button: {
      textTransform: 'initial',
      fontWeight: 400,
      color: theme.palette.primary.main,
      padding: 0,
      '&:hover': {
        backgroundColor: 'transparent',
        opacity: 0.9,
      },
    },
    firstButton: {
      marginRight: theme.spacing(1),
    }
  }),
);

type Props = { comments?: any[] };
const Comments = ({ comments }: Props) => {
  const classes = useStyles();

  const handleDelete = (id: string) => {
    console.log(id);
  }

  const handleEdit = (id: string) => {
    console.log(id);
  }

  return (
    <List
      className={classes.root}
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Commentaires
        </ListSubheader>
      }
    >
      {comments.map((comment: any, index: number) => (
        <>
          {/* -----------------------------------------  */}
          {/* ------------ comments details ------------ */}
          {/* -----------------------------------------  */}
          <ListItem alignItems="flex-start" key={comment.id}>
              <ListItemAvatar>
                <Avatar alt={comment.postedBy.name} src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography
                      variant="subtitle1"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {comment.postedBy.name}
                    </Typography>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {comment.updatedAt}
                    </Typography>
                  </Box>
                }
                secondary={comment.text}
              />
            </ListItem>

            {/* --------------------------------------- */}
            {/* ------------ button actions ----------- */}
            {/* --------------------------------------- */}
            <Box mt={-3} mb={1} display="flex" justifyContent="flex-end">
              <Button
                onClick={() => handleDelete(comment.id)} 
                className={clsx(classes.button, classes.firstButton)}
              >
                Supprimer
              </Button>
              <Button
                onClick={() => handleEdit(comment.id)}
                className={classes.button}
              >
                Modifier
              </Button>
            </Box>

            {/* -------------------------------- */}
            {/* ------------ divider ----------- */}
            {/* -------------------------------- */}
            {comments.length - 1 !== index && <Divider variant="inset" component="li" />}

          </>
      ))}
      
    </List>
  );
}

export default Comments;
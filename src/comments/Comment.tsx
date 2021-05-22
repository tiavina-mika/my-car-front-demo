import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

import { Comment as CommentType} from '../types/comment';

const useStyles = makeStyles(
  createStyles({
    inline: {
      display: 'inline',
    },
  }),
);

type Props = { comment: CommentType };
const Comment = ({ comment }: Props) => {
  const classes = useStyles();

  return (
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
  );
}

export default Comment;
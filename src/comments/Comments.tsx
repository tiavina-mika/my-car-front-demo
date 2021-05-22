import React, { Fragment } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { ListSubheader } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

import { Comment as CommentType } from '../types/comment';
import Comment from './Comment';
import ButtonActions from './ButtonsAction';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      paddingBottom: 0,
      paddingTop: theme.spacing(1),
      borderTop: '1px solid ' + grey[300],
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

type Props = { comments?: CommentType[] };
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
      {comments.map((comment: CommentType, index: number) => (
        <Fragment key={comment.id}>
          {/* -----------------------------------------  */}
          {/* ------------ comments details ------------ */}
          {/* -----------------------------------------  */}
            <Comment comment={comment}  />

            {/* --------------------------------------- */}
            {/* ------------ button actions ----------- */}
            {/* --------------------------------------- */}
            <ButtonActions id={comment.id} text={comment.text} />

            {/* -------------------------------- */}
            {/* ------------ divider ----------- */}
            {/* -------------------------------- */}
            {comments.length - 1 !== index && <Divider variant="inset" component="li" />}

          </Fragment>
      ))}
      
    </List>
  );
}

export default Comments;
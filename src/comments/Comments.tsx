import React from 'react';
import clsx from 'clsx';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Box, Button, ListSubheader } from '@material-ui/core';
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
        <>
          {/* -----------------------------------------  */}
          {/* ------------ comments details ------------ */}
          {/* -----------------------------------------  */}
            <Comment comment={comment} key={comment.id} />

            {/* --------------------------------------- */}
            {/* ------------ button actions ----------- */}
            {/* --------------------------------------- */}
            <ButtonActions id={comment.id} />

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
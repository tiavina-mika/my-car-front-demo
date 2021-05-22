import React, { useState } from 'react';
import clsx from 'clsx';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core';

import CommentForm from './CommentForm';
import { CommentFormValues } from '../types/comment';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

type Props = { id: string };
const ButtonActions = ({ id }: Props) => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => setOpen(prev => !prev);

  const handleDelete = (id: string) => {
    console.log(id);
  }

  const handleEdit = (values: CommentFormValues) => {
    console.log(id, values);
    toggle();
  }

  return (
    <Box mt={-3} mb={1}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          onClick={() => handleDelete(id)} 
          className={clsx(classes.button, classes.firstButton)}
        >
          Supprimer
        </Button>
        <Button
          // onClick={() => handleEdit(id)}
          onClick={toggle}
          className={classes.button}
        >
          Modifier
        </Button>
      </Box>

      {open && <CommentForm onSave={handleEdit} />}
    </Box>
  );
}

export default ButtonActions;
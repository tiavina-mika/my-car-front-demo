import { FormLabel, FormControl , TextField , Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>({
  label: {
    marginBottom: theme.spacing(1),
    fontWeight: 500,
  },
  asterix: {
    color: 'red',
  },
}));

type Props = {
  name: string;
  label?: string;
  rootClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  options?: any;
  register: any;
  defaultValue: string;
  type?: any;
  errors?: any;
  errorMessage?: string;
  required?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  variant?: 'filled' | 'outlined' | 'standard';
};

const FormField = ({
  label,
  name,
  rootClassName,
  labelClassName,
  inputClassName,
  options,
  type = 'text',
  errorMessage,
  errors,
  register,
  required = false,
  fullWidth = true,
  variant = 'outlined',
  placeholder,
  defaultValue,
}: Props) => {
  const classes = useStyles();

  return (
    <FormControl margin="normal" fullWidth={fullWidth} classes={{ root: rootClassName }}>
      {label && (
        <FormLabel classes={{ root: clsx(labelClassName, classes.label) }}>
          {label} 
          {required && <span className={classes.asterix}> *</span>}
        </FormLabel> 
      )}

      <TextField
        className={inputClassName}
        type={type}
        fullWidth={fullWidth}
        variant={variant}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name, { ...options, required })}
      />
      {errors[name] && (
        <span className={classes.asterix}>
          {errorMessage}
        </span>
      )}
    </FormControl>
  );
};

export default FormField;

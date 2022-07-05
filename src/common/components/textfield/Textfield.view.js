import React from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import textFieldStyles from "./Textfield.style";

const CustomTextField = ({
  // eslint-disable-next-line react/prop-types
  id,
  error,
  label,
  formControlprops,
  customClasses,
  variant = "outlined",
  ...rest
}) => {
  const classes = textFieldStyles();
  const inputClasses = {
    root: classes.outlinedInputroot,
    input: classes.outlinedInput,
    multiline: classes.outlinedInputMultiline,
    notchedOutline: classes.notchedOutline,
    ...customClasses,
  };
  return (
    <>
      <FormControl
        size="small"
        fullWidth
        variant={variant}
        className={classes.inputFormControl}
        {...formControlprops}
        error={!!error}
      >
        {label ? <InputLabel htmlFor={id}>{label}</InputLabel> : null}

        <OutlinedInput classes={inputClasses} id={id} label={label} {...rest} />
        {error ? (
          <FormHelperText className={classes.errorLabel}>
            <ErrorOutlineOutlinedIcon
              style={{ marginRight: 4, marginTop: 1, height: 21 }}
            />
            {error}
          </FormHelperText>
        ) : null}
      </FormControl>
    </>
  );
};

export default CustomTextField;

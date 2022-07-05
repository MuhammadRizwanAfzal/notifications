import React from 'react';
import Typography from '@material-ui/core/Typography';
import customTextIconStyles from './style';

type CustomTextIconProps = {|
  children: any,
  label: 'string',
  custom: 'string',
|};

const CustomTextIcon = (props: CustomTextIconProps) => {
  const {
    label,
    custom,
    children,
  } = props;
  const classes = customTextIconStyles();

  return (
    <div className={classes.textIconSection}>
      {children}
      &nbsp;
      <Typography variant="body1" className={`${custom}`}>
        {label}
      </Typography>
    </div>
  );
};

export default CustomTextIcon;

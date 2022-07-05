// @flow
import React from 'react';
import Link from 'next/link';
import IconButton from '@material-ui/core/IconButton';
import customButtonStyles from './iconButton.style';

type CustomIconButtonProps = {|
  variant?: 'outlined' | 'contained' | 'transparent',
  children?: any,
  nextLink?: boolean,
  href?: 'string',
|};

const CustomIconButton = (props: CustomIconButtonProps) => {
  const {
    variant,
    children,
    nextLink,
    href,
    ...rest
  } = props;
  const classes = customButtonStyles();

  const buttonClasses = {
    root: classes[`${variant}root`],
    disabled: classes[`${variant}Disabled`],
  };

  return (
    nextLink
      ? (
        <Link href={href} passHref>
          <IconButton classes={buttonClasses} {...rest}>
            {children}
          </IconButton>
        </Link>
      )
      : (
        <IconButton classes={buttonClasses} {...rest}>
          {children}
        </IconButton>
      )
  );
};

 CustomIconButton.defaultProps = {
  variant: 'transparent',
  children: 'button',
  nextLink: false,
  href: '',
};

export default CustomIconButton;

// @flow
import React from "react";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import Loader from "react-loader-spinner";
import customButtonStyles from "./style";

const CustomButton = (props) => {
  const {
    buttonType,
    variant,
    children,
    nextLink,
    isLoading,
    href,
    labelAlign,
    loaderParam,
    ...rest
  } = props;
  const classes = customButtonStyles();

  const buttonClasses = {
    label: classes[`${variant}${buttonType}Label${labelAlign}`],
    outlined: classes[`${variant}${buttonType}`],
    contained: classes[`${variant}${buttonType}`],
    text: classes[`${variant}${buttonType}`],
    disabled: classes[`${variant}${buttonType}Disabled`],
  };

  return nextLink ? (
    <Link href={href} passHref>
      <Button variant={variant} classes={buttonClasses} {...rest}>
        {isLoading && (
          <Loader
            type="ThreeDots"
            color="white"
            {...loaderParam}
            height={10}
            width={30}
          />
        )}

        {/* <CircularProgress style={{ color: 'white', opacity: 0.8 }} size={30} /> */}

        {children}
      </Button>
    </Link>
  ) : (
    <Button variant={variant} classes={buttonClasses} href={href} {...rest}>
      {isLoading ? (
        <Loader
          type="ThreeDots"
          color="gray"
          {...loaderParam}
          height={10}
          width={30}
        />
      ) : (
        // {/* <CircularProgress style={{ color: 'white', opacity: 0.8 }} size={30} /> */}
        children
      )}
    </Button>
  );
};

CustomButton.defaultProps = {
  buttonType: "success",
  variant: "contained",
  children: "button",
  nextLink: false,
  href: "",
  labelAlign: "",
  isLoading: false,
};

export default CustomButton;

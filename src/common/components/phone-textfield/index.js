import React from "react";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import styles from "./style";

const PhoneTextField = (props) => {
  const classes = styles();
  const {
    value,
    handleChange,
    defaultCountry,
    codeEditable,
    error,
    label,
    placeholder,
  } = props;

  return (
    <>
      <PhoneInput
        containerClass={clsx({
          [classes.phoneCnt]: !label,
          [classes.phoneTxt]: true,
        })}
        countryCodeEditable={codeEditable}
        country={defaultCountry}
        placeholder={placeholder || "Phone Number"}
        id="phone_number"
        name="phone_number"
        error={!!error}
        enableSearch={true}
        value={value}
        inputClass={clsx({
          [classes.inputField]: true,
          [classes.inputError]: error,
        })}
        buttonClass={clsx({
          [classes.button]: true,
          [classes.buttonError]: error,
        })}
        onChange={handleChange}
      />
      {error ? (
        <Typography className={classes.errorLabel}>
          <ErrorOutlineOutlinedIcon
            style={{ marginRight: 4, marginTop: 1, height: 21 }}
          />
          {error}
        </Typography>
      ) : null}
    </>
  );
};

export default PhoneTextField;

import React from "react";
import FormHelperText from "@material-ui/core/FormHelperText";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import WarningOutlinedIcon from "@material-ui/icons/WarningOutlined";
import customAlertsStyle from "./customAlerts.style";

const CustomAlert = (props) => {
  const classes = customAlertsStyle();

  const { type, description, ...rest } = props;

  const alertType = classes[`${type}_alert`];

  return (
    <FormHelperText className={`${classes.alertCnt} ${alertType}`} {...rest}>
      {type === "success" && <CheckOutlinedIcon />}
      {type === "failure" && <ErrorOutlineOutlinedIcon />}
      {type === "info" && <InfoOutlinedIcon />}
      {type === "warning" && <WarningOutlinedIcon />}
      {description}
    </FormHelperText>
  );
};

export default CustomAlert;

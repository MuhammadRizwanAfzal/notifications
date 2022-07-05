// @flow
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import CustomTextField from "../../../../common/components/textfield/Textfield.view";
import ForgotStyles from "./forgot.style";
import CustomButton from "../../../../common/components/button/Button";
import EmailIcon from "../../../../common/icons/email.icon";
import ForgotIcon from "../../../../common/icons/forgotPassword.icon";
import { Axios } from "../../../../common/request";
import { isValidEmail } from "../../../../common/validations/email";

const Forgot = (props) => {
  const classes = ForgotStyles();
  const { toggleForgotOption, setStepNo } = props;

  // Forgot Email state with error
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotEmailErr, setForgotEmailErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async () => {
    const emailErr = isValidEmail(forgotEmail);
    if (!emailErr) {
      try {
        setIsLoading(true);
        const response = await Axios.post("v2/forget_password", {
          email: forgotEmail,
        });

        setIsLoading(false);
        // Response checking
        if (response?.data?.status === "success") {
          setStepNo(2);
        } else {
          setForgotEmailErr(response?.data?.errMsgs || "Something went wrong");
        }
      } catch (err) {
        setIsLoading(false);
        setForgotEmailErr(
          err?.response?.data?.errMsgs || "Something went wrong"
        );
      }
    } else {
      setForgotEmailErr(emailErr);
    }
  };

  return (
    <section className={classes.forgotCnt}>
      <div className={classes.forgotInnerCnt}>
        <div style={{ textAlign: "center" }}>
          <ForgotIcon viewBox="-28 0 462 462.02229" style={{ fontSize: 120 }} />
        </div>

        <Typography variant="h2" align="center" className={classes.mainHeading}>
          Forgot Password
        </Typography>
        <Typography align="center" className={classes.subHeading}>
          Input your email address to receive change password link
        </Typography>
        <CustomTextField
          id="forgot_email"
          name="forgotEmail"
          placeholder="Enter your email address"
          value={forgotEmail}
          onChange={(e) => {
            setForgotEmailErr("");
            setForgotEmail(e.target.value);
          }}
          error={forgotEmailErr}
          startAdornment={
            <EmailIcon className={classes.icon} viewBox="0 0 511.974 511.974" />
          }
          customClasses={{
            inputAdornedStart: classes.inputAdornedStartItem,
          }}
        />

        <div>
          <CustomButton
            variant="outlined"
            buttonType="success"
            style={{
              width: "49%",
              marginRight: "2%",
            }}
            onClick={toggleForgotOption}
          >
            Back
          </CustomButton>

          {/* Send Email Button */}
          <CustomButton
            variant="contained"
            buttonType="success"
            className="customBtn"
            style={{
              width: "49%",
            }}
            onClick={submitHandler}
            isLoading={isLoading}
            disabled={isLoading}
          >
            {!isLoading && "Send Email"}
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Forgot;

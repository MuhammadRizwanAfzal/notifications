// @flow
import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";

import ForgotStyles from "./forgot.style";
import CustomButton from "../../../../common/components/button/Button";
import ThumbsUpIcon from "../../../../common/icons/thumbsUp.icon";

const Message = (props) => {
  const theme = useTheme();
  const classes = ForgotStyles();
  const { toggleForgotOption } = props;
  return (
    <section className={classes.forgotCnt}>
      <div className={classes.forgotInnerCnt}>
        <div style={{ textAlign: "center" }}>
          <ThumbsUpIcon viewBox="0 0 512 512" style={{ fontSize: 100 }} />
        </div>
        <Typography
          variant="h2"
          align="center"
          style={{ color: theme.palette.typography.mediumGreen }}
        >
          Email Sent!
        </Typography>
        <Typography align="center" className={classes.subHeading}>
          Password reset email has been sent to your email address.{" "}
        </Typography>

        <div>
          <CustomButton
            variant="outlined"
            buttonType="success"
            style={{
              width: "100%",
            }}
            onClick={toggleForgotOption}
          >
            Back to Login
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Message;

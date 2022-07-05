// @flow
import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import EmailSentIcon from "../../../../../common/icons/emailSent.icon";
import ThankyouStyles from "./thankyou.style";
import CustomButton from "../../../../../common/components/button/Button";

const Thankyou = (props) => {
  const theme = useTheme();
  const classes = ThankyouStyles();
  const { setMobileFormType } = props;
  return (
    <section>
      <form>
        <div className="formBox">
          <EmailSentIcon
            viewBox="0 0 512 512"
            color={theme.palette.typography.darkGray}
            style={{ fontSize: 120, marginBottom: 20, width: "100%" }}
          />
          <Typography
            variant="h2"
            style={{ color: theme.palette.typography.mediumGreen }}
          >
            Success!
          </Typography>
          <Typography variant="h3">
            Thanks for signing up. Please confirm your email.
          </Typography>
          <br />
          <Typography variant="body1" align="left">
            We have emailed you a confirmation link. Once you confirm your email
            you can continue to put in the details that will make everyone want
            to go to your website directly. It will only take 5 minutes. If you
            need help email us at support@365sol.com.
          </Typography>
          <br />
          <Typography className={classes.importantTitle} align="left">
            The next step is super important:
          </Typography>
          <Typography variant="h3" align="left" style={{ fontWeight: 600 }} />
          <Typography variant="body1" align="left">
            You do not want to miss emails from us…..Make sure you add{" "}
            <b>onlythebest@365sol.com</b> to your address book. If you do not
            know how to do it click here for instructions. It will only take a
            minute.
          </Typography>
          <hr />

          <Hidden only={["md", "lg", "xl"]}>
            <CustomButton
              variant="outlined"
              buttonType="success"
              onClick={() => {
                setMobileFormType("sign-in");
              }}
              style={{ marginRight: 10 }}
            >
              Back to Login
            </CustomButton>
          </Hidden>
        </div>
      </form>
    </section>
  );
};

export default Thankyou;

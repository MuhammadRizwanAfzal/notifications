// @flow
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import WarningIcon from "@material-ui/icons/Warning";
import { useRouter } from "next/router";
import React from "react";
import CustomButton from "../button/Button";
import NotFoundStyles from "./notFound.style";

const NotFoundToLogin = (props) => {
  const classes = NotFoundStyles();
  const theme = useTheme();
  const router = useRouter();

  return (
    <>
      <main className={classes.mainCnt}>
        <section className={classes.notFoundCnt}>
          <div className={classes.notFoundInnerCnt}>
            <div style={{ textAlign: "center" }}>
              <WarningIcon className={classes.icon} />
            </div>
            <Typography
              variant="h3"
              align="center"
              className={classes.mainHeading}
            >
              This Package / Product Not Found
            </Typography>
            <Typography align="center" className={classes.subHeading}>
              Please login to see the details
            </Typography>

            <div style={{ textAlign: "center" }}>
              {/* Reset Button */}
              <CustomButton
                variant="contained"
                buttonType="success"
                className="customBtn"
                style={{
                  width: "49%",
                }}
                onClick={() => {
                  router.push(`/login/traveler`);
                }}
              >
                Go To Login
              </CustomButton>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NotFoundToLogin;

// @flow
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";

import Hidden from "@material-ui/core/Hidden";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import AccountStyles from "./account.style";
import SignUp from "./signup/signUp.view";
import TravelerSignUp from "./travelerSignup/index";
// import ExpertSignUp from './expertSignup/index';
import Login from "./login/login.view";
import ViewSlider from "../../../common/components/view-slider/ViewSlider.view";
import CustomButton from "../../../common/components/button/Button";
import AccountHeader from "../../../common/components/account-header/accountHeader.cmp";
import Forgot from "./forgot/index";

const Account = ({ activeView }) => {
  const classes = AccountStyles();
  const [activePanel, setActivePanel] = useState("left");
  const [mobileFormType, setMobileFormType] = useState("sign-in");
  const [userType, setUserType] = useState(null);
  const [forgotOption, setForgotOption] = useState(false);

  const toggleForgotOption = () => {
    setForgotOption(!forgotOption);
  };

  // handle Sign up for large Screens
  const handleSignUpView = (e) => {
    if (e.currentTarget.value === "travel-expert") {
      const win = window.open("/register-travel-expert", "_blank");
      win.focus();
    } else {
      setActivePanel("right");
      setUserType(e.currentTarget.value);
    }
  };

  const signInOverlay = (
    <div className="container-img overlay-panel overlay-left nashville">
      <img src="/images/account_screen.jpg" alt="Account" />
      <div className={classes.imageLabel}>
        <Typography variant="h2" className={classes.overlayLabel}>
          Good to see you!
        </Typography>
        <Typography variant="h3" className={classes.overlayLabel}>
          You already have an account?
        </Typography>
        <CustomButton
          variant="contained"
          buttonType="success"
          style={{ padding: "10px 20px", fontSize: 20, marginBottom: 10 }}
          onClick={() => {
            setForgotOption(false);
            setActivePanel("left");
          }}
        >
          Sign In
        </CustomButton>
      </div>
    </div>
  );

  const signUpOverLay = (
    <div className="container-img overlay-panel overlay-right">
      <div className="nashville">
        <img src="/images/account_screen.jpg" alt="account" />
      </div>
      <div className={classes.imageLabel}>
        <Typography variant="h2" className={classes.overlayLabel}>
          Hello Friends
        </Typography>
        <Typography variant="h3" className={classes.overlayLabel}>
          You don`t have account yet? Don`t worry!
        </Typography>
        <Typography variant="h3" className={classes.overlayLabel}>
          You still can join us as
        </Typography>
        <div className={classes.signupAsCnt}>
          <ToggleButtonGroup
            exclusive
            onChange={handleSignUpView}
            classes={{ grouped: classes.groupedBtn }}
          >
            <ToggleButton
              value="business"
              classes={{
                root: classes.toggleButtonRoot,
                selected: classes.toggleButtonRootSelected,
              }}
            >
              User One
            </ToggleButton>
            <ToggleButton
              value="traveler"
              style={{ borderLeft: "1px solid #468ce0" }}
              classes={{
                root: classes.toggleButtonRoot,
                selected: classes.toggleButtonRootSelected,
              }}
            >
              User Two
            </ToggleButton>
            <ToggleButton
              value="travel-expert"
              style={{ borderLeft: "1px solid #468ce0" }}
              classes={{
                root: classes.toggleButtonRoot,
                selected: classes.toggleButtonRootSelected,
              }}
            >
              User Three
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    </div>
  );

  return (
    <main>
      {/* For Large Screens */}
      {/* SHow Sign up if activePanel = right */}
      <Hidden only={["xs", "sm"]}>
        <ViewSlider
          formsList={[
            <div className="form-container first-container mt-2">
              {activePanel === "left" ? (
                <></>
              ) : (
                <>
                  <AccountHeader style={{ width: "100%" }} />
                  {userType === "business" && (
                    <SignUp setMobileFormType={setMobileFormType} />
                  )}
                  {userType === "traveler" && (
                    <TravelerSignUp setMobileFormType={setMobileFormType} />
                  )}
                  {/* {userType === 'travel-expert' && (
                    <ExpertSignUp setMobileFormType={setMobileFormType} />
                  )} */}
                </>
              )}{" "}
            </div>,
            <div className="form-container sign-in-container">
              <AccountHeader />
              {!forgotOption ? (
                <Login
                  setUserTypeAccount={setUserType}
                  activeView={activeView}
                  toggleForgotOption={toggleForgotOption}
                />
              ) : (
                <Forgot toggleForgotOption={toggleForgotOption} />
              )}
            </div>,
          ]}
          overLays={[signInOverlay, signUpOverLay]}
          activePanel={activePanel}
        />
      </Hidden>

      {/* FOr Small Screens */}
      <Hidden only={["md", "lg", "xl"]}>
        <AccountHeader style={{ width: "100%" }} />
        <div className={classes.mainBox}>
          {mobileFormType === "sign-in" && !forgotOption && (
            <Login
              setMobileFormType={setMobileFormType}
              toggleForgotOption={toggleForgotOption}
              setUserTypeAccount={setUserType}
              activeView={activeView}
            />
          )}
          {mobileFormType === "sign-in" && forgotOption && (
            <Forgot toggleForgotOption={toggleForgotOption} />
          )}

          {mobileFormType !== "sign-in" && userType === "business" && (
            <SignUp setMobileFormType={setMobileFormType} />
          )}

          {mobileFormType !== "sign-in" && userType === "traveler" && (
            <TravelerSignUp setMobileFormType={setMobileFormType} />
          )}

          {/* {mobileFormType !== 'sign-in' && userType === 'travel-expert' && (
            <ExpertSignUp setMobileFormType={setMobileFormType} />
          )} */}
        </div>
      </Hidden>
    </main>
  );
};

export default Account;

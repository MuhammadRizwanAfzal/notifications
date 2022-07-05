// @flow
import React, { useState, useEffect, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import { useRouter } from "next/router";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import CustomTextField from "../../../../common/components/textfield/Textfield.view";
import loginStyles from "./login.style";
import CustomButton from "../../../../common/components/button/Button";
import EmailIcon from "../../../../common/icons/email.icon";
import PasswordIcon from "../../../../common/icons/password.icon";
import CustomAlert from "../../../../common/components/custom-alerts/customAlerts.cmp";
import { userLogin } from "../../../../common/actions/auth";
import Context from "../../../../common/components/context/context";
import {
  userOnePermissions,
  userTwoPermissions,
  userThreePermissions,
} from "../../../../common/components/helpers/permissions";

const Login = (props) => {
  const classes = loginStyles();
  const theme = useTheme();
  const router = useRouter();
  const ContextConsumer = useContext(Context);

  const {
    setMobileFormType,
    toggleForgotOption,
    activeView,
    setUserTypeAccount,
  } = props;
  const [userType, setUserType] = useState(2);

  //2FA Show or hide
  const [authStep, setAuthStep] = useState(1);
  const [resend, setResend] = useState(false);
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState(false);
  // Handle toggle button switch
  const handleUserType = (_, newUserType) => {
    router.push(`/login/${newUserType}`);
    if (!newUserType) {
      // Avoid button toggeling
      return;
    }
    setUserType(newUserType);
    setUserTypeAccount(newUserType);
  };
  // Component States
  const [isLoading, setIsLoading] = useState(false);
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState("");
  const [attemptError, setAttemptError] = useState("");
  const [loginAttempt, setLoginAttempt] = useState(false);

  useEffect(() => {
    setUserType(activeView);
    setUserTypeAccount(activeView);
  }, []);

  // Form Change Handler
  const handleChange = (evt) => {
    setLoginAttempt(false);
    setAttemptError("");
    const value = evt.target.value;
    setLoginState({
      ...loginState,
      [evt.target.name]: value,
    });
  };

  const loginSuccess = (res) => {
    dispatch({ type: "UPDATE_PROFILE", value: res?.data?.USER });
    const userRoles = res?.data?.USER.ID_user_types;
    const permission =
      userRoles === 1
        ? userOnePermissions
        : userRoles === 2
        ? userTwoPermissions
        : userThreePermissions;
    dispatchUserInfo({ type: "UPDATE_ROLE", value: permission });
    // roleBasedRoute(userRoles, dispatchUserInfo);

    if (res.data.USER.ID_user_types === 2) {
      if (res?.data?.USER?.last_login_datetime) {
        router.push("/business/dashboard");
      } else {
        router.push("/business/profile");
      }
    }
    if (res.data.USER.ID_user_types === 1) {
      // Check context if redirect url exists
      if (redirectUrl.url) {
        dispatchRedirectUrl({
          type: "UPDATE_REDIRECT_STATUS",
          value: {
            enable: true,
          },
        });

        router.push(redirectUrl.url);
      } else {
        router.push("/traveler/dashboard");
      }
    }
    if (res.data.USER.ID_user_types === 3) {
      router.push("/expert/dashboard");
    }
  };

  const submitHandler = async (data) => {
    setIsLoading(true);

    const token = "";
    const userTypeId =
      userType === "traveler" ? 1 : userType === "business" ? 2 : 3;

    const request = {
      email: loginState.email,
      password: loginState.password,
      captcha_code: token,
      ID_user_types: userTypeId,
      user_agent: userAgent?.info,
      ...data,
    };

    userLogin(
      request,
      (res) => {
        setResend(false);
        setIsLoading(false);

        if (code != "") {
          if (res.data.status === "success" && res.data.otp_code) {
            localStorage.setItem("access_token", res?.data?.token);
            localStorage.setItem("user_id", res?.data?.USER?.userid);
            localStorage.setItem(
              "otp_access_token",
              res?.data?.otp_access_token
            );
            document.cookie = `access_token=${res?.data?.token}; path=/`;
            document.cookie = `userid=${res?.data?.USER?.userid}; path=/`;
            loginSuccess(res);
          }
        } else if (res?.data?.loginAttempt == 0) {
          setLoginAttempt(true);
          setAttemptError(
            "You have reached the max login attempts, Try again in 1 hour"
          );
        } else {
          setAuthStep(2);
        }
      },
      (err) => {
        if (code != "") {
          setCodeError(true);
          setIsLoading(false);
        } else if (err?.data?.loginAttempt == 0) {
          setLoginAttempt(true);
          setIsLoading(false);
          setAttemptError(
            "You have reached the max login attempts, Try again in 1 hour"
          );
        } else {
          setIsLoading(false);
          setLoginError(
            err?.response?.data?.errMsg ||
              "Something went wrong, please try later"
          );
        }
      }
    );
  };

  const loginStateCount = Object.keys(loginState).filter(
    (key) => loginState[key] !== ""
  ).length;
  return (
    <section className={classes.loginCnt}>
      <div className={`${classes.loginInnerCnt} box`}>
        <Typography variant="h1" align="center" className={classes.mainHeading}>
          Welcome
        </Typography>
        <Typography
          variant="p"
          align="center"
          className={classes.headingTagLine}
        >
          Login to continue
        </Typography>
        <div className={classes.loginAsCnt}>
          <ToggleButtonGroup
            value={userType}
            exclusive
            onChange={handleUserType}
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
              classes={{
                root: classes.toggleButtonRoot,
                selected: classes.toggleButtonRootSelected,
              }}
            >
              User Two
            </ToggleButton>
            <ToggleButton
              value="travel-expert"
              classes={{
                root: classes.toggleButtonRoot,
                selected: classes.toggleButtonRootSelected,
              }}
            >
              User Three
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        {loginError && <CustomAlert type="failure" description={loginError} />}
        <CustomTextField
          id="user_email"
          name="email"
          placeholder="Enter your email address"
          value={loginState.email}
          onChange={handleChange}
          startAdornment={
            <EmailIcon
              className={classes.icon}
              viewBox="0 0 511.974 511.974"
              color={theme.palette.icon.mediumGray}
            />
          }
          customClasses={{
            inputAdornedStart: classes.inputAdornedStartItem,
          }}
        />
        <CustomTextField
          id="user_password"
          name="password"
          placeholder="Enter your password"
          value={loginState.password}
          onChange={handleChange}
          type="password"
          startAdornment={
            <PasswordIcon
              viewBox="0 0 24 24"
              color={theme.palette.icon.mediumGray}
            />
          }
          customClasses={{
            inputAdornedStart: classes.inputAdornedStartItem,
          }}
        />

        {loginAttempt && (
          <CustomAlert type="failure" description={attemptError} />
        )}

        <div className={classes.signInBtnCnt}>
          <div className={classes.loginBtn}>
            <CustomButton
              style={{
                padding: 0,
              }}
              buttonType="success"
              variant="text"
              onClick={toggleForgotOption}
            >
              Forgot Password?
            </CustomButton>
          </div>
          <div>
            <Hidden only={["md", "lg", "xl"]}>
              <CustomButton
                variant="outlined"
                buttonType="success"
                onClick={() => {
                  userType === "travel-expert"
                    ? router.push("/register-travel-expert")
                    : setMobileFormType("sign-up");
                }}
                style={{ marginRight: 10 }}
              >
                Register
              </CustomButton>
            </Hidden>

            <CustomButton
              buttonType="success"
              variant="contained"
              onClick={() => submitHandler()}
              disabled={isLoading || loginStateCount !== 2 || loginAttempt}
              isLoading={isLoading}
            >
              {!isLoading && "Login"}
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

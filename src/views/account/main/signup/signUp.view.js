// @flow
import React, { useState, useEffect } from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PersonIcon from "@material-ui/icons/Person";
import CheckIcon from "@material-ui/icons/Check";
import Step1 from "./step1/step1.view";
import Step2 from "./step2/step2.view";
import Thankyou from "./thankyou/thankyou.view";
import SignUpStyles from "./signUp.style";
import { tbSignUp } from "../../../../common/actions/auth";

const SignUp = (props) => {
  const [stepNo, setStepNo] = useState(1);
  const classes = SignUpStyles();
  const { setMobileFormType } = props;

  // Sign up with property information
  const [signUpState, setSignUpState] = useState({
    name: "",
    email: "",
    external_link: "",
    password: "",
  });

  const [signUpErrors, setSignUpError] = useState("");

  // Sign Up call
  const signUpCall = async () => {
    tbSignUp(
      signUpState,
      () => {
        setStepNo(3);
      },
      (err) => {
        setSignUpError(
          err?.data?.errMsgs?.[Object.keys(err?.data?.errMsgs)?.[0]]
        );
      }
    );
  };

  useEffect(() => {
    // do something when value changes
    if (
      signUpState.name &&
      signUpState.email &&
      signUpState.external_link &&
      signUpState.password
    ) {
      setSignUpError("");
      signUpCall();
    }
  }, [signUpState]);

  // Step1 Next handler
  const step1Handler = (data) => {
    setSignUpState({
      ...signUpState,
      ...data,
    });
  };

  // Step2 Submit handler
  const step2Handler = (data) => {
    setSignUpState({
      ...signUpState,
      ...data,
    });
  };

  return (
    <section className={classes.signUpCnt}>
      <div className={`${classes.signUpInnerCnt}`}>
        <div className={classes.wizardBox}>
          <HomeOutlinedIcon
            className={`${classes.wizardBoxIcon} ${classes.selectedIcon} ${classes.marRight}`}
          />
          <PersonIcon
            className={
              stepNo === 2 || stepNo === 3
                ? `${classes.wizardBoxIcon} ${classes.selectedIcon} ${classes.marRight}`
                : `${classes.wizardBoxIcon} ${classes.marRight}`
            }
          />
          <CheckIcon
            className={
              stepNo === 3
                ? `${classes.wizardBoxIcon} ${classes.selectedIcon}`
                : `${classes.wizardBoxIcon}`
            }
          />
        </div>
        <section className={stepNo === 1 ? "" : classes.hide}>
          <Step1
            setStepNo={setStepNo}
            setMobileFormType={setMobileFormType}
            step1Handler={step1Handler}
          />
        </section>

        <section className={stepNo === 2 ? "" : classes.hide}>
          <Step2
            setStepNo={setStepNo}
            setMobileFormType={setMobileFormType}
            step2Handler={step2Handler}
            signUpErrors={signUpErrors}
          />
        </section>
        {stepNo === 3 ? (
          <Thankyou setMobileFormType={setMobileFormType} />
        ) : (
          <div />
        )}
      </div>
    </section>
  );
};

export default SignUp;

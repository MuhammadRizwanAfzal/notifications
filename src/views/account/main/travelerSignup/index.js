// @flow
import React, { useState } from 'react';
import styles from './signUp.style';
import Thankyou from './thankyou/thankyou.view';
import Signup from './signUp.view';

const SignUp = (props) => {
  const classes = styles();
  const [success, setSuccess] = useState(false);
  const { setMobileFormType } = props;
  const registered = () => {
    setSuccess(true);
  };

  return (
    <section className={classes.signUpCnt}>
      {success ? (
        <Thankyou
          setMobileFormType={setMobileFormType}
        />
      ) : <Signup registered={registered} setMobileFormType={setMobileFormType} />}
    </section>
    );
};

export default SignUp;

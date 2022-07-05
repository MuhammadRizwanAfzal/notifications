// @flow
import React, { useState } from "react";
import Forgot from "./forgot.view";
import Message from "./message.view";
import AccountHeader from "../../../../common/components/account-header/accountHeader.cmp";

const Index = (props) => {
  const { toggleForgotOption } = props;
  const [stepNo, setStepNo] = useState(1);
  return (
    <>
      <AccountHeader />
      {stepNo === 1 ? (
        <Forgot toggleForgotOption={toggleForgotOption} setStepNo={setStepNo} />
      ) : (
        <Message toggleForgotOption={toggleForgotOption} />
      )}
    </>
  );
};

export default Index;

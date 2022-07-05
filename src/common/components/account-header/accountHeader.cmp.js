// @flow
/* eslint-disable */
import React from "react";
import Link from "next/link";
import AccountStyles from "./accountHeader.style";

const AccountHeader = (props) => {
  const classes = AccountStyles();

  return (
    <header className={classes.header}>
      <div className={classes.logoCnt}>
        <Link href="/" passHref>
          <a>
            <img src="/images/365sol-logo.png" alt="logo" />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default AccountHeader;

// @flow
import React from "react";

const AccountPage = () => {
  return <></>;
};
export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: "/login/user-two",
    },
    props: {},
  };
}
export default AccountPage;

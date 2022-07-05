// @flow
import React from "react";
import Head from "next/head";
import Account from "../../src/views/account/main/account.view";
import { authToken } from "../../src/common/shared.utils";
import {
  userOnePermissions,
  userTwoPermissions,
  userThreePermissions,
} from "../../src/common/components/helpers/permissions";

const AccountPage = (props) => {
  const { slug } = props;
  return (
    <>
      <Head>
        <title>Login | Sign up, User Two</title>
        <meta property="title" content="Login | Sign up, User Two" />
        <meta
          property="description"
          content="365sol a trusted source for you to plan and discover your best destinations, recommended experiences by our experts and also provides you platform to market your travel business with us."
        />
        <meta
          property="keywords"
          content="365sol, 365sol.com, travel and destinations, travel and tourism, travel, travel guide, travel business, travel expert, business, business listing, travel business listing, vacations, promote business, travel business marketing"
        />
      </Head>
      <Account activeView={slug} />
    </>
  );
};
export async function getServerSideProps(props) {
  const validateToken = await authToken(
    props.req.headers.cookie,
    null,
    null,
    props
  );
  const role = validateToken?.props?.info?.USER?.ID_user_types;

  const redirectUrl =
    role === 1
      ? "/user-one/dashboard"
      : role === 2
      ? "/user-two/dashboard"
      : role === 3
      ? "/user-three/dashboard"
      : "";

  const auth = redirectUrl
    ? {
        redirect: {
          permanent: false,
          destination: redirectUrl,
        },
        props: {},
      }
    : { props: { slug: props.query.slug } };
  return { ...auth };
}
export default AccountPage;

import LocationOnIcon from "@material-ui/icons/LocationOn";
import { authAxios } from "./request";
import { logoutPermissions } from "../common/components/helpers/permissions";

// Cookies parsing
export const parseCookies = (cookies) => {
  const cookieObj = cookies
    ?.split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
  return cookieObj;
};

// Function to authorize token on server side
export const authToken = async (cookie, failureRedirect, successRedirect) => {
  const cookieObj = parseCookies(cookie);
  const accessToken = cookieObj?.access_token;
  let auth;
  try {
    const data = await authAxios(accessToken, true).post("/v1/authorize");
    auth = successRedirect
      ? {
          redirect: {
            permanent: false,
            destination: successRedirect,
          },
          props: { info: data?.data },
        }
      : { props: { info: data?.data } };
  } catch (error) {
    auth = failureRedirect
      ? {
          redirect: {
            permanent: false,
            destination: failureRedirect,
          },
          props: {},
        }
      : { props: {} };
  }

  return {
    ...auth,
  };
};

// Function to check if provided role exist
export const checkRole = async (permission, failureRedirect) => {
  const auth = !permission
    ? {
        redirect: {
          permanent: false,
          destination: failureRedirect,
        },
        props: {},
      }
    : { props: {} };
  return {
    ...auth,
  };
};

//function to make logs on failed apip calls
export const createLog = async (data, fs, file) => {
  fs.appendFile(
    file,
    new Date() + " " + JSON.stringify(data) + "\r",
    function (err) {
      console.log(err);
    }
  );
};

export function stringToHslColor(str, s, l) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const h = hash % 360;
  return `hsl(${h}, ${s}%, ${l}%)`;
}

export const WHO_IS_TRAVELING = "Who`s Traveling";
export const I_WANT = "I want";
export const MY_BUDGET = "My Budget";

export const FILTERING_OPTIONS = [WHO_IS_TRAVELING, I_WANT, MY_BUDGET];

// Search Bar Formatting
// Filter Labels formatting..
export const formatOptionLabel = ({ label }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <LocationOnIcon style={{ color: "#ccc", marginRight: 5 }} />
    <div>{label}</div>
  </div>
);

export const logoutToTraveler = (dispatch, dispatchUserInfo, router) => {
  localStorage.removeItem("access_token");
  document.cookie =
    "access_token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  document.cookie = "userid= ; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  dispatch({ type: "UPDATE_PROFILE", value: {} });
  dispatchUserInfo({
    type: "UPDATE_ROLE",
    value: logoutPermissions,
  });
  router.push("/login/user-two");
};

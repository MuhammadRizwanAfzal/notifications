import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Context from "./context";
import { authAxios } from "../../request/index";

const routes = {
  tb: [
    "/user-one/dashboard",
    "/user-one/profile",
    "/properties",
    "/user-one/edit-property",
  ],
  tbLogin: ["/account-travel-business"],
  traveler: ["/user-two/dashboard", "/user-two/search-preferences"],
  travelerLogin: ["/account-traveler"],
};

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const ContextConsumer = useContext(Context);
  const { events } = useRouter();
  const { dispatch, dispatchUserInfo, userInfo } = ContextConsumer;

  const roleBasedRoute = (userRoles) => {
    // User roles ids
    const rolesId = userRoles.map(({ ID_user_types }) => ID_user_types);

    // Is Traveler
    const isTraveler = rolesId.includes(1);
    const isTB = rolesId.includes(2);

    // If Traveler Dashboard
    if (isTraveler) {
      const obj =
        JSON.stringify(routes.traveler).indexOf(window.location.pathname) > -1;
      if (obj) {
        dispatchUserInfo({ type: "UPDATE_ROLE", value: 1 });
        return;
      }
    }

    // If TB Dashboard
    if (isTB) {
      const obj = routes.tb.includes(window.location.pathname);
      if (obj) {
        dispatchUserInfo({ type: "UPDATE_ROLE", value: 2 });
        return;
      }
    }

    // If None => Show based on priority
    const priority = { 1: 1, 2: 2 };
    const currentRole = rolesId?.reduce((c, n) => {
      return priority[c] > priority[n] ? c : n;
    });
    dispatchUserInfo({ type: "UPDATE_ROLE", value: currentRole || 1 });
  };

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get("access_token");
      try {
        if (token) {
          const res = await authAxios(token, true).post("/v1/authorize");
          if (res?.data?.USER) {
            setUser(res?.data?.USER);
            dispatch({ type: "UPDATE_PROFILE", value: res?.data?.USER });

            const userRoles = res?.data?.USER.user_roles;
            roleBasedRoute(userRoles);
          } else {
            dispatch({ type: "UPDATE_PROFILE", value: {} });
          }
        }
      } catch (err) {
        dispatch({ type: "UPDATE_PROFILE", value: {} });
        dispatchUserInfo({ type: "UPDATE_ROLE", value: 0 });
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const ProtectRoute = ({ children }) => {
  const { isAuthenticated, user, loading } = useAuth();
  // Loading
  if (loading) {
    return <div />;
  }

  // Checking for TB Login Screens
  let obj = routes.tbLogin.includes(window.location.pathname);
  if (isAuthenticated && obj) {
    window.location.href = "/business/dashboard";
    return "";
  }
  // Checking for Traveler Login Screens
  obj = routes.travelerLogin.includes(window.location.pathname);
  if (isAuthenticated && obj) {
    // Check preferences selected
    window.location.href = "/traveler/dashboard";
    return "";
  }

  // Checking for TB private routes
  obj = routes.tb.includes(window.location.pathname);
  if (!isAuthenticated && obj) {
    window.location.href = "/account-travel-business";
    return "";
  }

  // Checking for Traveler private routes
  obj = routes.traveler.includes(window.location.pathname);
  if (!isAuthenticated && obj) {
    window.location.href = "/account-traveler";
    return "";
  }

  // Search Preferences check
  // if (window.location.pathname === '/traveler/dashboard') {
  //   if (user.total_preferences === 0) {
  //     window.location.href = '/traveler/search-preferences';
  //     return '';
  //   }
  // }

  // Don't allow if no tb role
  obj = routes.tb.includes(window.location.pathname);
  if (obj) {
    const isExists = user.user_roles.find((item) => item.ID_user_types === 2);
    if (!isExists) {
      window.location.href = "/";
      return "";
    }
  }

  return children;
};

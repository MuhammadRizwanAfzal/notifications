import { logoutPermissions } from "../helpers/permissions";

export const initialState = {
  isLoading: true,
};

export const msgBarInitialState = {
  msgBar: {
    load: false,
    message: "",
    type: "",
  },
};

export const userInfoState = {
  role: logoutPermissions,
};

export const paymentInitialState = {
  status: false,
};

export const redirectInitialState = {
  url: "",
  state: "",
  enable: false,
};

export const cartInitialState = {
  step: 0,
  cart: {
    isLoading: true,
  },
  buyNow: {},
  payment: {},
};

export const cartMsgBarInitialState = {
  cartMsgBar: {
    load: false,
    message: "",
  },
};

export const userAgentInitialState = {
  isLoading: true,
};

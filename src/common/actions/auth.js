import { Axios, authAxios } from "../request/index";

export const validateAuth = (token, callback, failure) => {
  authAxios(token, true)
    .post("/v1/authorize")
    .then((res) => {
      callback(res.data);
    })
    .catch((res) => {
      failure();
    });
};

export const userLogin = (request, callback, failure) => {
  Axios.post("v3/authenticate-user", request)
    .then((res) => {
      callback(res);
    })
    .catch((error) => {
      failure(error);
    });
};

export const tbListProperty = (request, callback, failure) => {
  Axios.get(
    `/v2/owner/validate-unit?name=${request.name}&email=${request.email}&external_link=${request.externalLink}`
  )
    .then((res) => {
      callback(res);
    })
    .catch((error) => {
      failure(error);
    });
};

export const tbSignUp = (request, callback, failure) => {
  Axios.post("/v2/list-unit", request)
    .then((res) => {
      callback(res);
    })
    .catch((error) => {
      failure(error);
    });
};

// Traveler Sign up
export const travelerSignUp = (request, callback, failure) => {
  Axios.post("/v2/traveler-signup", request)
    .then((res) => {
      callback(res);
    })
    .catch((error) => {
      failure(error);
    });
};

// Traveler Sign up
export const travelExpertSignUp = (request, callback, failure) => {
  Axios.post("/v2/travel-expert-signup", request)
    .then((res) => {
      callback(res);
    })
    .catch((error) => {
      failure(error);
    });
};

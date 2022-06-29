import { env } from "../../../env";
const axios = require("axios").default;

const URL = `${env.REACT_APP_API_URL}/api/bispar/param`;
const URL_GROUP_PARAM = `${env.REACT_APP_API_URL}/api/bispar/group`;

export const getAll = (payload) => {
  return axios
    .get(URL, {
      params: payload,
    })
    .catch((error) => {
      if (error.response) {
        return error.response;
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
    });
};

export const createItem = (payload) => {
  return axios.post(URL, payload).catch((error) => {
    if (error.response) {
      return error.response;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log(error.message);
    }
  });
};
export const updateItem = (payload) => {
  return axios.put(URL, payload).catch((error) => {
    if (error.response) {
      return error.response;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log(error.message);
    }
  });
};

export const deleteById = (payload) => {
  return axios.delete(URL, { data: payload }).catch((error) => {
    if (error.response) {
      return error.response;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log(error.message);
    }
  });
};

export const getGroupParam = (payload) => {
  return axios.get(URL_GROUP_PARAM, {
    params: payload,
  });
};

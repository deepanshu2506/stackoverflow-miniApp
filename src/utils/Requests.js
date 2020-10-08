import querystring from "querystring";
import { SF_API } from "../config";
export const get = (api, params = {}, headers = {}) => {
  return new Promise((resolve, reject) => {
    const query = querystring.stringify(params);
    const url = api + (query.length > 0 ? "?" + query : "");
    const options = {
      method: "GET",
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

export const StackOverFlowGet = (params) => {
  const reqparams = {
    order: "desc",
    sort: "hot",
    page: 3,
    site: "stackoverflow",
    ...params,
  };
  return get(SF_API, reqparams);
};

import axios from "axios";

import { set } from "lodash";

export function callApi(args = {}) {
  const promise = new Promise((resolve, reject) => {
    let doRequest;

    const headers = {};
    set(headers, "Accept", "application/json");
    set(headers, "Content-Type", "application/json; charset=utf-8");

    if (args.method === "PUT") {
      doRequest = axios.put(args.url, args.data, {
        headers: headers,
      });
    } else if (args.method === "POST") {
      doRequest = axios.post(args.url, args.data, {
        headers: headers,
      });
    } else if (args.method === "DELETE") {
      doRequest = axios.delete(args.url, {
        headers: headers,
      });
    } else {
      doRequest = axios.get(args.url, {
        headers: headers,
      });
    }

    doRequest.then(
      (res) => {
        if (args.callback) {
          args.callback(res);
        }
        // resolve(res);
      },
      // Use rejectHandler as the second argument so that render errors won't be caught.
      (err) => {
        if (args.callback) {
          args.callback(err);
        }
        // if (err.response && err.response.status === 401) {
        //   window.location.href = '/';
        // }
        // reject(err.response);
      }
    );
  });

  return promise;
}

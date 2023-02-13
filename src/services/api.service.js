import axios from "axios";
const config = require("../config/config.json");
var json = {};

export default class ApiService {
  constructor() {
    json["base_url"] = config.base_url;
    this.setHeaders();
  }

  setHeaders() {
    axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    axios.interceptors.request.use(
      async function (request) {
        // let token = await sqLiteService.getCurrentUserAuthorizationToken();
        let token = localStorage.getItem("_token");
        if (token) {
          request.headers.Authorization = "Bearer " + token;
        }
        return request;
      },
      function (error) {
        //
      }
    );
  }

  get(api, config = {}) {
    // console.log({api})
    return new Promise((resolve, reject) => {
      axios
        .get(json.base_url + api, {
          headers: {
            secretcode: "XumI5XjJazp87HGb9oVSYc7j0URcZqEEYUjzRH4K",
          },
        })
        .then(
          (res) => {
            resolve(res.data);
          },
          (err) => {
            console.log(err.response.data, "API GET ERROR");
            reject(err.response.data);
          }
        );
    });
  }

  post(api, data, config = {}) {
    return new Promise((resolve, reject) => {
      axios
        .post(json.base_url + api, data, {
          headers: {
            secretcode: "XumI5XjJazp87HGb9oVSYc7j0URcZqEEYUjzRH4K",
          },
        })
        .then(
          (res) => {
            resolve(res.data);
          },
          (err) => {
            console.log(err, "API POST ERROR");
            reject(err.response.data);
          }
        );
    });
  }

  // postLogin(api, data, config = {}) {
  //     return new Promise( resolve => {
  //         axios.post(json.base_url+api, data, config).then(res => {
  //             resolve(res.data);
  //         });
  //     })
  // }

  patch(api, data, config = {}) {
    return new Promise((resolve, reject) => {
      axios
        .patch(json.base_url + api, data, {
          headers: {
            secretcode: "XumI5XjJazp87HGb9oVSYc7j0URcZqEEYUjzRH4K",
          },
        })
        .then(
          (res) => {
            resolve(res.data);
          },
          (err) => {
            console.log(err.response.data, "API POST ERROR");
            reject(err.response.data);
          }
        );
    });
  }
  delete(api, config = {}) {
    return new Promise((resolve, reject) => {
      axios
        .delete(json.base_url + api, {
          headers: {
            secretcode: "XumI5XjJazp87HGb9oVSYc7j0URcZqEEYUjzRH4K",
          },
        })
        .then(
          (res) => {
            resolve(res.data);
          },
          (err) => {
            console.log(err.response.data, "API POST ERROR");
            reject(err.response.data);
          }
        );
    });
  }
}

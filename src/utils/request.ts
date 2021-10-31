import axios from "axios";

const instance = axios.create({
  baseURL: "",
  timeout: 10000
});

export const post = (url: string, data = {}) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(
        res => {
          resolve(res);
        },
        err => {
          reject(err);
        }
      );
  });
};

export const get = (url: string) => {
  return new Promise((resolve, reject) => {
    instance.get(url).then(
      res => {
        resolve(res);
      },
      err => {
        reject(err);
      }
    );
  });
};

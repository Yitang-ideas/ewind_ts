// import axios, { AxiosResponse } from "axios";

// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAw6zzwiYLHcrGFder1XuuFc42UK2Mr4l8
// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAw6zzwiYLHcrGFder1XuuFc42UK2Mr4l8

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import store from "../../index";
let timer: any = null;

export default {
  async login(context: any, payload: any) {
    return await context.dispatch("auth", { ...payload, mode: "login" });
  },

  async signup(context: any, payload: any) {
    return await context.dispatch("auth", { ...payload, mode: "signup" });
  },

  async auth(context: any, payload: any) {
    const mode = payload.mode;
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAw6zzwiYLHcrGFder1XuuFc42UK2Mr4l8";

    if (mode === "signup") {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAw6zzwiYLHcrGFder1XuuFc42UK2Mr4l8";
    }

    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    });
    // console.log(context.rootGetters["records/creditRecords"]);
    const resData = await res.json();
    if (!res.ok) {
      const error = new Error(
        resData.message || "用户登录失败,请检查账号或密码"
      );

      await store.dispatch("messages/setMessageAction", {
        type: "error",
        show: true,
        text: resData.message || "用户登录失败,请检查账号或密码"
      });
      throw error;
    } else {
      await store.dispatch("messages/setMessageAction", {
        type: "success",
        show: true,
        text: resData.message || "用户登录成功"
      });
    }

    context.commit("setIsFirstLogin", { isFirstLogin: true });

    // const expiresIn = 3000;
    const expiresIn = +resData.expiresIn * 1000; // convert to number by adding +
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem("token", resData.idToken);
    localStorage.setItem("userId", resData.localId);
    localStorage.setItem("tokenExpiration", expirationDate.toString());

    timer = setTimeout(function() {
      context.dispatch("autoLogout");
    }, expiresIn);

    context.commit("setUser", {
      token: resData.idToken,
      userId: resData.localId
    });
  },

  tryLogin(context: any) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const tokenExpiration = localStorage.getItem("tokenExpiration");

    if (tokenExpiration) {
      const expiresIn = +tokenExpiration - new Date().getTime();
      if (expiresIn < 0) {
        return;
      } else {
        timer = setTimeout(function() {
          context.dispatch("autoLogout");
        }, expiresIn);
      }
    }

    if (token && userId) {
      context.commit("setUser", {
        token,
        userId
      });
    }
  },

  autoLogout(context: any) {
    context.dispatch("logout");
    context.commit("setAutoLogout");
  },

  logout(context: any) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpiration");

    clearTimeout(timer);

    context.commit("setUser", {
      token: null,
      userId: null
    });

    context.commit("setIsFirstLogin", { isFirstLogin: false });
  }

  // autoLogout(context: any) {
  //   context.dispatch("logout");
  //   context.commit("setAutoLogout");
  // }
};

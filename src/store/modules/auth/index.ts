import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export interface UserProp {
  userId: string | null;
  token: string | null;
  tokenExpiration: string | null;
  didAutoLogout: boolean;
  isFirstLogin: boolean;
}

export default {
  namespaced: true,
  state(): UserProp {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
      didAutoLogout: false,
      isFirstLogin: false
    };
  },
  mutations,
  getters,
  actions
};

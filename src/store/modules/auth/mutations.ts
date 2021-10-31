import { UserProp } from "./index";

interface SetUserPayload {
  token: string;
  userId: string;
}

interface IsFirstLoginPayload {
  isFirstLogin: boolean;
}

export default {
  setUser(state: UserProp, payload: SetUserPayload): void {
    state.token = payload.token;
    state.userId = payload.userId;
  },
  setAutoLogout(state: UserProp): void {
    state.didAutoLogout = true;
  },
  setIsFirstLogin(state: UserProp, payload: IsFirstLoginPayload): void {
    state.isFirstLogin = payload.isFirstLogin;
  }
};

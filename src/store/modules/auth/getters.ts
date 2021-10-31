import { UserProp } from "./index";

export default {
  userId(state: UserProp): string | null {
    return state.userId;
  },
  token(state: UserProp): string | null {
    return state.token;
  },
  isAuthenticated(state: UserProp): boolean {
    // 如果已经拿到token，则为认证成功
    return !!state.token;
  },
  didAutoLogout(state: UserProp): boolean {
    return state.didAutoLogout;
  },
  isFirstLogin(state: UserProp): boolean {
    return state.isFirstLogin;
  }
};

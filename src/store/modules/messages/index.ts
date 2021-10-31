import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export interface MessageProp {
  type: string;
  show: boolean;
  text: string;
}

export default {
  namespaced: true,
  state(): MessageProp {
    return {
      type: "",
      show: false,
      text: ""
    };
  },
  mutations,
  getters,
  actions
};

import { MessageProp } from "./index";

export default {
  setMessage(state: MessageProp, payload: MessageProp): void {
    state.type = payload.type;
    state.show = payload.show;
    state.text = payload.text;
  }
};

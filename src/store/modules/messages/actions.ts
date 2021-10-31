import { MessageProp } from ".";

export default {
  setMessageAction(context: any, payload: MessageProp): void {
    context.commit("setMessage", payload);
  }
};

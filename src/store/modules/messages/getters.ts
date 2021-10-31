import { MessageProp } from "./index";

export default {
  getMessage(state: MessageProp): MessageProp {
    return {
      type: state.type,
      show: state.show,
      text: state.text
    };
  }
};

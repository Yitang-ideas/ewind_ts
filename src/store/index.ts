import { createStore } from "vuex";

import recordsModule, { RecordsProp } from "./modules/records";
import authModule, { UserProp } from "./modules/auth";
import messageModule, { MessageProp } from "./modules/messages";

export interface GlobalStateProp {
  records: RecordsProp;
  auth: UserProp;
  messages: MessageProp;
}

const store = createStore<GlobalStateProp>({
  modules: { records: recordsModule, auth: authModule, messages: messageModule }
});

export default store;

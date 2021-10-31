import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

import creditRecords, { CreditProp } from "../../../mock/recordData";

export interface RecordsProp {
  records: CreditProp[];
}

export default {
  namespaced: true,
  state(): RecordsProp {
    return {
      records: creditRecords
    };
  },
  mutations,
  actions,
  getters
};

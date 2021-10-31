export default {
  creditRecords(state: any) {
    return state.records;
  },
  hasRecords(state: any) {
    return state.records && state.records.length > 0;
  }
};

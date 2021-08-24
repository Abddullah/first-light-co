import Types from "../constants/auth";
// actions
var setUser = (cond) => ({
  type: Types.setUser,
  payload: cond,
});

export default {
  setUser,
};

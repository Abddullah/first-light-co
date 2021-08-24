import Types from "../constants/main";

var defaultState = {
  user: null,
  feedlyUser: { token: false, userId: false },
  spotifyUser: null,
};

var authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Types.setUser: {
      let newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    }

    default:
      return state;
  }
};
export default authReducer;

import { createStore } from "redux";

const initialstate = {
  user: {
    email: "smithlam@gmail.com",
    password: "123456",
    isAuthenticated: false,
  },
};

function reducer(state = initialstate, action) {
  if (action.type === "LOGIN") {
    state.user = action.payload;
    if (
      state.user.email === "smithlam@gmail.com" &&
      state.user.password === "123456"
    ) {
      state.user.isAuthenticated = true;
    }
  }
  if (action.type === "LOGOUT") {
    state.user.isAuthenticated = false;
  }
  return state;
}
const store = createStore(reducer);

export default store;

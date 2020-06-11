import { createStore } from "redux";

const initialstate = {
  user: {
    email: "smithlam@gmail.com",
    password: "123456",
    isAuthenticated: false,
  },
  jobID: null,
};

function reducer(state = initialstate, action) {
  if (action.type === "select-job") {
    state.jobID = { ...action.payload };
    console.log("what is job", state.jobID);
  }
  if (action.type === "LOGIN") {
    state.user = {...action.payload };
    if (
      state.user.email === "smithlam@gmail.com" &&
      state.user.password === "123456"
    ) {
      state.jobID = state.jobID;
      state.user.isAuthenticated = true;
    }
  }
  if (action.type === "LOGOUT") {
    state.user.isAuthenticated = false;
    state.jobID = null;
    console.log("What is job ID here", state.jobID)
  }
  return state;
}
const store = createStore(reducer);

export default store;

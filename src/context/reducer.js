import { DISPLAY_ALERT } from "./actions";
import { CLEAR_ALERT } from "./actions";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    // we are changing the alert to red.
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "please provide all values",
    };
  }
  if (action.type === CLEAR_ALERT) {
    // We are clearing the alert
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
  throw new Error(`no such action: ${action.type}`);
};

export default reducer;

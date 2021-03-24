import { userConstants } from "../constants";

const userState = {
  isSignedIn: '',
  uid: '',
  client: '',
  accessToken: '',
};

const authentication = (state = userState, action: any = {}) => {
  
  const { user } = action;

  switch (action.type) {
    case userConstants.USER_SET:
      return {
        ...user
      }
    case userConstants.USER_SIGNOUT:
      return {};
    default:
      return state
  }
}

export default authentication;
import { userConstants } from '../constants';

const signIn = (email: string, password: string) => ({
  type: userConstants.USER_SIGNIN,
  email,
  password
});

const signOut = () => ({
  type: userConstants.USER_SIGNOUT,
});

const getUser = (user: string) => ({
  type: userConstants.USER_GET_REQUEST,
  user,
});

export const userActions = {
  signIn,
  signOut,
  getUser,
};

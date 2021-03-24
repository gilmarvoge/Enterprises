import { call, put, takeEvery } from 'redux-saga/effects';
import { Alert } from '../../components';
import { signIn } from '../../services/api';
import { userConstants, loadingConstant } from '../constants';
import { saveStorageUserAsync, signOutStorageUserAsync } from '../../storage';

function* loginSaga(action: any) {
  try {
    yield put({ type: loadingConstant.START_LOADING, id: 'LOADING_LOGIN' });
    const { email, password } = action;

    const response = yield call(signIn, email, password);

    if (response) {
      const { success } = response.data;
      const { client, uid } = response.headers;
      const accessToken = response.headers['access-token'];

      let user = { isSignedIn: success, uid, client, accessToken }
      saveStorageUserAsync(user);

      yield put({ type: userConstants.USER_SET, user });
      yield put({ type: loadingConstant.STOP_LOADING, id: "LOADING_LOGIN" });
    }

  } catch (error) {
    const message = error?.response?.data?.errors;
    yield put({ type: loadingConstant.STOP_LOADING, id: "LOADING_LOGIN" });
    Alert('Alert', String(message));
  }
}

function* logoutSaga() {
  try {
    signOutStorageUserAsync();
  }
  catch (error) {
    Alert('Alert', String(error.message));
  }
}

function* getUserSaga(action: any) {
  try {
    const { user } = action;
    yield put({ type: userConstants.USER_SET, user })
  }
  catch (error) {
    Alert('Alert', String(error.message));
  }
}

export default function* MenuSagas() {
  yield takeEvery(userConstants.USER_SIGNIN, loginSaga);
  yield takeEvery(userConstants.USER_SIGNOUT, logoutSaga);
  yield takeEvery(userConstants.USER_GET_REQUEST, getUserSaga);
}

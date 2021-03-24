import { all } from "redux-saga/effects";
import userSagas from './authentication.saga';
import enterprisesSagas from './enterprises.saga';

export default function* rootSaga() {
  yield all([
    userSagas(),
    enterprisesSagas(),
  ])
}

import { call, put, takeEvery } from 'redux-saga/effects';
import { Alert } from '../../components';
import { getEnterprises, getEnterprisesDetails, getEnterprisesFilter } from '../../services/api';
import { enterprisesConstant, loadingConstant } from '../constants';

function* enterprisesSaga() {
  try {
    yield put({ type: loadingConstant.START_LOADING, id: 'LOADING_ENTERPRISES' });

    const response = yield call(getEnterprises);

    if (response) {
      const enterprises = response.data.enterprises;
      yield put({ type: enterprisesConstant.ENTERPRISES_SET, enterprises });
    }

    yield put({ type: loadingConstant.STOP_LOADING, id: 'LOADING_ENTERPRISES' });

  } catch (error) {
    const message = error?.response?.data?.errors;
    yield put({ type: loadingConstant.STOP_LOADING, id: 'LOADING_ENTERPRISES' });
    Alert('Alert', String(message));
  }
}

function* enterprisesDetailsSaga(action: any) {
  try {
    yield put({ type: loadingConstant.START_LOADING, id: 'LOADING_ENTERPRISE_DETAILS' });
    const { id } = action;

    const response = yield call(getEnterprisesDetails, id);

    if (response) {
      const enterprisesDetails = response.data.enterprise;
      yield put({ type: enterprisesConstant.ENTERPRISES_DETAILS_SET, enterprisesDetails });
    }

    yield put({ type: loadingConstant.STOP_LOADING, id: 'LOADING_ENTERPRISE_DETAILS' });

  } catch (error) {
    const message = error?.response?.data?.errors;
    yield put({ type: loadingConstant.STOP_LOADING, id: 'LOADING_ENTERPRISE_DETAILS' });
    Alert('Alert', String(message));
  }
}

function* enterprisesFilterSaga(action: any) {
  try {
    yield put({ type: loadingConstant.START_LOADING, id: 'LOADING_ENTERPRISE_FILTER' });
    const { enterpriseType, name } = action;

    const response = yield call(getEnterprisesFilter, enterpriseType, name);

    if (response) {
      const enterprisesFilter = response.data.enterprises;
      yield put({ type: enterprisesConstant.ENTERPRISES_FILTER_SET, enterprisesFilter });
    }

    yield put({ type: loadingConstant.STOP_LOADING, id: 'LOADING_ENTERPRISE_FILTER' });

  } catch (error) {
    const message = error?.response?.data?.errors;
    yield put({ type: loadingConstant.STOP_LOADING, id: 'LOADING_ENTERPRISE_FILTER' });
    Alert('Alert', String(message));
  }
}

export default function* MenuSagas() {
  yield takeEvery(enterprisesConstant.ENTERPRISE_REQUEST, enterprisesSaga);
  yield takeEvery(enterprisesConstant.ENTERPRISES_FILTER_REQUEST, enterprisesFilterSaga);
  yield takeEvery(enterprisesConstant.ENTERPRISES_DETAILS_REQUEST, enterprisesDetailsSaga);
}

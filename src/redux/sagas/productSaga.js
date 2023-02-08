import {put, call, takeLatest} from 'redux-saga/effects';
import {types} from '../actions/types';
import {getApi} from '../apis/baseApi';

function* fetchProduct({payload}) {
  const response = yield call(getApi, payload);
  if (response?.length > 0) {
    yield put({
      type: types.GET_PRODUCT_SUCCESS,
      payload: response,
    });
  } else {
    yield put({type: types.GET_PRODUCT_FAILURE, payload: response});
  }
}

export default function* productSaga() {
  yield takeLatest(types.GET_PRODUCT, fetchProduct);
}

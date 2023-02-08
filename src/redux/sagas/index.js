import {spawn} from 'redux-saga/effects';
import productSaga from './productSaga';

export default function* rootSaga() {
  yield spawn(productSaga);
}

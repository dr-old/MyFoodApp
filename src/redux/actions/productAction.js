import {types} from './types';

export function fetchProductData(data) {
  return {
    type: types.GET_PRODUCT,
    payload: data,
  };
}

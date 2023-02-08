import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

const useAction = () => {
  const products = useSelector(state => state.productReducer);
  const navigation = useNavigation();
  const [isFav, setFav] = useState(false);

  const handleSimilarProduct = () => {
    let data = [];
    if (products.data?.length > 0) {
      for (var i = 0; i < 9; i++) {
        data.push(products.data[i]);
      }
    } else {
      data = [];
    }

    return data;
  };

  return {navigation, isFav, setFav, handleSimilarProduct};
};

export default useAction;

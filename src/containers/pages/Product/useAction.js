import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useAction = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer);
  const favorite = useSelector(state => state.generalReducer.favoriteList);
  const navigation = useNavigation();

  const handleFamilarProduct = () => {
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

  const handleGetFavorite = id => {
    let data =
      favorite?.length > 0 ? favorite.find(item => item?.name === id) : false;
    return data;
  };

  const handleSetFavorite = (item, type) => {
    let data =
      favorite?.length > 0 ? favorite.filter(i => i?.name !== item.name) : [];
    if (type) {
      data.push(item);
    }
    dispatch({type: 'SET_FAVORITE_LIST', favorite: data});
  };

  return {
    navigation,
    handleFamilarProduct,
    handleGetFavorite,
    handleSetFavorite,
  };
};

export default useAction;

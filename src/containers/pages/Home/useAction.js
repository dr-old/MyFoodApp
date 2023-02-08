import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductData} from '../../../redux/actions/productAction';

const useAction = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer);
  const navigation = useNavigation();
  const [isMounted, setMounted] = useState(true);
  const [isSearch, setSearch] = useState('');
  const [isData, setData] = useState([]);

  useEffect(() => {
    if (isMounted) {
      handleGetProduct();
    }
    return () => {
      setMounted(false);
    };
  });

  const handleGetProduct = () => {
    const payload = {
      link: 'foods',
    };
    dispatch(fetchProductData(payload));
  };

  const handleSearch = event => {
    let searchText = event.toString();
    setSearch(searchText);
    searchText = searchText.trim().toUpperCase();
    let data = products.data;
    if (data?.length > 0) {
      data = data.filter(l => l.name.toUpperCase().match(searchText));
      setData(data);
    }
  };

  return {
    navigation,
    products,
    isData,
    isSearch,
    setSearch,
    handleSearch,
  };
};

export default useAction;

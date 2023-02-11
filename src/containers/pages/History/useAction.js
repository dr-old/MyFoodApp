import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const useAction = () => {
  const login = useSelector(state => state.authReducer);
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(false);
  const [isProduct, setProduct] = useState([]);

  return {login, navigation, isProduct, isLoading};
};

export default useAction;

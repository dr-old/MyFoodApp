import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, Platform, ToastAndroid} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const useAction = () => {
  const login = useSelector(state => state.authReducer);
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(false);
  const [isProduct, setProduct] = useState([]);

  return {navigation, isProduct, isLoading};
};

export default useAction;

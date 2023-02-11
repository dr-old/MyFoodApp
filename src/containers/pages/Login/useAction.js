import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';

const useAction = () => {
  const dispatch = useDispatch();
  // const regis = useSelector(state => state.registerReducer);
  const form = useSelector(state => state.generalReducer.formLogin);
  const navigation = useNavigation();
  const [isToogle, setToogle] = useState(true);

  const onChangeText = (type, value) => {
    dispatch({type: 'SET_FORM_LOGIN', inputType: type, inputValue: value});
  };

  const signIn = () => {
    showMessage({
      message: 'Success',
      description: 'Login is success',
      type: 'success',
    });
    setTimeout(() => {
      navigation.push('Home');
    }, 3000);
  };

  const signInValidate = () => {
    if (form.email && form.password) {
      return true;
    } else {
      return false;
    }
  };

  return {
    isToogle,
    setToogle,
    onChangeText,
    form,
    signIn,
    signInValidate,
    navigation,
  };
};

export default useAction;

import React from 'react';
import {SafeAreaView, View, Image, Alert} from 'react-native';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';

import Config from 'react-native-config';
import Button from '../../components/Button';
import styles from './Login.style';
import Input from '../../components/Input';
import usePost from '../../hooks/usePost';

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();
  const dispatch = useDispatch();

  function handleLogin(values) {
    post(Config.API_AUTH_URL + '/login', values);
  }

  if (error) {
    Alert.alert('Dükkan', 'Bir Hata Oluştu!');
  }

  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Dükkan', 'Kullanıcı Bulunamadı!');
    } else {
      dispatch({type: 'SET_USER', payload: {user}});
    }
    console.log(data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.bodyContainer}>
            <Input
              placeholder="Kullanıcı Adı"
              value={values.username}
              onType={handleChange('username')}
              iconName="account"
            />
            <Input
              placeholder="Şifre"
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
              isSecure
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;

const user = {
  address: {
    geolocation: {
      lat: '-37.3159',
      long: '81.1496',
    },
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874',
  },
  id: 1,
  email: 'john@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {
    firstname: 'john',
    lastname: 'doe',
  },
  phone: '1-570-236-7033',
  __v: 0,
};

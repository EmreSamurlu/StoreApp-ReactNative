import React from 'react';
import {SafeAreaView, View, Image} from 'react-native';

import Button from '../../components/Button';
import styles from './Login.style';
import Input from '../../components/Input';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </View>
      <View style={styles.bodyContainer}>
        <Input placeholder="Kullanıcı Adı" />
        <Input placeholder="Şifre" />
        <Button text="Giriş Yap" />
      </View>
    </SafeAreaView>
  );
};

export default Login;

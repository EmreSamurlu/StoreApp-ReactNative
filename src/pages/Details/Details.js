import React from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import styles from './Details.style';

const Details = ({route}) => {
  const {id} = route.params;
  const {loading, data, error} = useFetch(`${Config.API_URL}/${id}`);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: data.image}} style={styles.img} />
      <Text style={styles.price}>Price: ${data.price}</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.category}>{data.category}</Text>
        <Text style={styles.desc}>{data.description}</Text>
      </View>
    </View>
  );
};

export default Details;

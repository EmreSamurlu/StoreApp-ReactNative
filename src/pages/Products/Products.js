import React from 'react';
import {SafeAreaView, Text, FlatList, ActivityIndicator} from 'react-native';
import Config from 'react-native-config';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

import styles from './Products.style';

const Products = ({navigation}) => {
  const {loading, data, error} = useFetch(Config.API_URL);

  const handleSelect = id => {
    navigation.navigate('Details Page', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleSelect(item.id)} />
  );

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;

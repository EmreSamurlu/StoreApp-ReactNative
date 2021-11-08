import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Config from 'react-native-config';

import Loading from '../../components/Loading';
import Error from '../../components/Error';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

import styles from './Products.style';

const Products = ({navigation}) => {
  const {loading, data, error} = useFetch(Config.API_PRODUCT_URL);

  const handleSelect = id => {
    navigation.navigate('DetailsPage', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;

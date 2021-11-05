import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.img} source={{uri: product.image}} />
        <View style={styles.rightContainer}>
          <Text style={styles.category}>{product.category}</Text>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>Price: ${product.price}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;

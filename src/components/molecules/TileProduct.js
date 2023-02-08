import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {color, styles} from '../../utils/styles';
import {ButtonIcon} from '../atoms';

const TileProduct = ({item, onClick}) => {
  return (
    <View style={stylesCust.cardItem}>
      <View style={stylesCust.cardImage}>
        <Image source={{uri: item.image}} style={stylesCust.image} />
      </View>
      <View style={stylesCust.cardBody}>
        <View style={stylesCust.cardTitle}>
          <Text numberOfLines={2} style={stylesCust.title}>
            {item.name}
          </Text>
        </View>
        <ButtonIcon
          type={stylesCust.buttonType(color.white, color.bluep5)}
          name="heart"
          size={20}
          borderRadius={38}
          onClick={onClick}
        />
      </View>
    </View>
  );
};

const stylesCust = StyleSheet.create({
  cardList: {
    flex: 1,
  },
  cardItem: [
    {
      flex: 1,
      flexDirection: 'row',
      marginBottom: 30,
      backgroundColor: color.white,
      borderRadius: 20,
      padding: 20,
    },
    styles.shadowCust(),
  ],
  image: {
    resizeMode: 'cover',
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  cardImage: {
    height: 80,
    width: 80,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.green,
  },
  cardBody: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 10,
  },
  title: [styles.h5()],
  buttonType: (
    clr = color.tblack,
    backgroundColor = 'transparent',
    borderColor = 'transparent',
  ) => ({
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    color: clr,
  }),
});

export default TileProduct;

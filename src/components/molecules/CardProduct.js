import React from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import helpers from '../../utils/helpers';
import {color, styles} from '../../utils/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CardProduct = ({data}) => {
  const navigation = useNavigation();
  return (
    <View style={stylesCust.cardList}>
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.push('Product', {itemData: item})}
            key={index}
            style={stylesCust.cardItem}>
            <View style={stylesCust.cardImage}>
              <Image source={{uri: item.image}} style={stylesCust.image} />
            </View>
            <View style={stylesCust.cardBody}>
              <View style={stylesCust.cardTitle}>
                <Text numberOfLines={2} style={stylesCust.title}>
                  {item.name}
                </Text>
              </View>
              {/* <Text numberOfLines={1} style={stylesCust.price}>
                {helpers.formatCurrency(item.price, 'Rp. ')}
              </Text>
              <Text numberOfLines={1} style={stylesCust.place}>
                {item.place}
              </Text>
              <View style={stylesCust.rating}>
                <FontAwesome5 name="star" size={8} color={color.oranges} />
                <Text style={stylesCust.ratingText}>5.0 | Terjual 10</Text>
              </View> */}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const stylesCust = StyleSheet.create({
  cardList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardItem: [
    {
      height: 156,
      width: width * 0.38,
      marginBottom: 30,
      backgroundColor: color.white,
      borderRadius: 20,
    },
    styles.shadowCust(),
  ],
  image: {
    resizeMode: 'cover',
    width: width * 0.38,
    height: 100,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  cardImage: {
    height: 100,
    width: width * 0.38,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.green,
  },
  cardBody: {paddingHorizontal: 20},
  cardTitle: {
    height: 30,
    marginTop: 5,
    justifyContent: 'center',
  },
  title: styles.h9(),
  price: [styles.h7(), {marginTop: 5}],
  place: [styles.h9(), {marginVertical: 5}],
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: [styles.p7(color.tgrey), {marginLeft: 5}],
});

export default CardProduct;

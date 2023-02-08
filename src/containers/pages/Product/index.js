import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {ButtonIcon, ButtonLabel, Divider} from '../../../components/atoms';
import helpers from '../../../utils/helpers';
import {color, styles} from '../../../utils/styles';
import {Container} from '../../organism';
import stylesCust from './stylesCust';
import useAction from './useAction';

function Product({route}) {
  const {itemData} = route.params;
  const {navigation, isQty, setQty, isFav, setFav} = useAction();

  return (
    <Container>
      <Image source={{uri: itemData.image}} style={stylesCust.image} />
      <View style={{position: 'absolute', top: 20, left: 20, zIndex: 10}}>
        <ButtonIcon
          type={stylesCust.buttonType(color.tblack, color.white5)}
          name="chevron-left"
          size={20}
          borderRadius={38}
          onClick={() => navigation.goBack()}
        />
      </View>
      <View style={stylesCust.card}>
        <View style={stylesCust.cardHeader}>
          <View style={stylesCust.cardTitle}>
            <Text style={styles.h3(color.tblack)}>{itemData.name}</Text>
          </View>
          <ButtonIcon
            type={
              isFav
                ? stylesCust.buttonType(color.white, color.bluep5)
                : 'default'
            }
            name="heart"
            size={20}
            borderRadius={38}
            onClick={() => setFav(!isFav)}
          />
        </View>
        <View
          style={{
            backgroundColor: color.white2,
            padding: 20,
            borderRadius: 15,
          }}>
          <Text style={styles.h5()}>How to make:</Text>
          <Divider height={10} />
          <Text style={styles.p4(color.tblack)}>{itemData.desc}</Text>
        </View>
      </View>
    </Container>
  );
}

export default Product;
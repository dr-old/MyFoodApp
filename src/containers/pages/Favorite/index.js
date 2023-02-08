import * as React from 'react';
import {View, Text} from 'react-native';
import {Divider} from '../../../components/atoms';
import {TileProduct} from '../../../components/molecules';
import {color} from '../../../utils/styles';
import {Container} from '../../organism';
import stylesCust from './stylesCust';
import useAction from './useAction';

function Favorite() {
  const {navigation, favorite, handleSetFavorite} = useAction();

  return (
    <Container
      bgColor={color.white8}
      navbar={{
        type: 'fixed',
        title: 'Your Favorites',
        onClick: () => navigation.goBack(),
      }}>
      <View style={stylesCust.card}>
        <Divider height={10} />
        {favorite?.length > 0 ? (
          <View style={stylesCust.cardList}>
            {favorite.map((item, index) => (
              <TileProduct
                key={index}
                onClick={() => handleSetFavorite(item)}
                item={item}
              />
            ))}
          </View>
        ) : null}
      </View>
    </Container>
  );
}

export default Favorite;

import * as React from 'react';
import {View, Text} from 'react-native';
import {ButtonIcon, ButtonImage, Divider} from '../../../components/atoms';
import {CardProduct} from '../../../components/molecules';
import {color, styles} from '../../../utils/styles';
import {Container, ImageCarousel} from '../../organism';
import stylesCust from './stylesCust';
import useAction from './useAction';

function Home() {
  const {navigation, products, isData, isSearch, handleSearch} = useAction();

  return (
    <Container
      bgColor={color.white7}
      loading={products.loading}
      navbar={{
        type: 'home',
        value: isSearch,
        onChangeText: value => handleSearch(value),
        onSearch: () => handleSearch(isSearch),
        // onProfile: () => navigation.push('Favorite'),
      }}>
      <View style={stylesCust.card}>
        <Divider height={10} />
        {isData.length > 0 ? (
          <CardProduct data={isData} />
        ) : (
          <>
            {products?.data?.length > 0 ? (
              <CardProduct data={products.data} />
            ) : null}
          </>
        )}
      </View>
    </Container>
  );
}

export default Home;

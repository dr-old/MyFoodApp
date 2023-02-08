import * as React from 'react';
import {View, Text} from 'react-native';
import {ButtonIcon, ButtonImage, Divider} from '../../../components/atoms';
import {CardProduct} from '../../../components/molecules';
import {color, styles} from '../../../utils/styles';
import {Container, ImageCarousel} from '../../organism';
import stylesCust from './stylesCust';
import useAction from './useAction';

function Home() {
  const {navigation, product, products} = useAction();

  return (
    <Container
      bgColor={color.white8}
      loading={products.loading}
      navbar={{
        type: 'fixed',
        onSearch: () => console.log(),
        onProfile: () => console.log(),
      }}>
      <View style={stylesCust.card}>
        {/* <Text style={styles.h5(color.bluep1)}>Rekomendasi</Text> */}
        <Divider height={10} />
        {/* <Text>{JSON.stringify(products.data)}</Text> */}
        {!products.loading && products?.data?.length > 0 ? (
          <CardProduct data={products.data} />
        ) : null}
      </View>
    </Container>
  );
}

export default Home;

import * as React from 'react';
import {View, Text} from 'react-native';
import {ButtonIcon, ButtonImage, Divider} from '../../../components/atoms';
import {CardProduct} from '../../../components/molecules';
import {color, styles} from '../../../utils/styles';
import {Container, ImageCarousel} from '../../organism';
import stylesCust from './stylesCust';
import useAction from './useAction';

function Home() {
  const {category, navigation, onScrollEnd, banner, product} = useAction();

  return (
    <Container
      bgColor={color.white8}
      navbar={{
        type: 'fixed',
        onSearch: () => console.log(),
        onProfile: () => console.log(),
      }}>
      <View style={stylesCust.card}>
        {/* <Text style={styles.h5(color.bluep1)}>Rekomendasi</Text> */}
        <Divider height={10} />
        <CardProduct data={product} />
      </View>
    </Container>
  );
}

export default Home;

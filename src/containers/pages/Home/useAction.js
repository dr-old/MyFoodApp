import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Alert, Platform} from 'react-native';
import {useDispatch} from 'react-redux';

const useAction = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const category = [
    {
      name: `Pakaian\nWanita`,
      image: require('../../../../assets/icon/Dress.png'),
      onClick: () => console.log(),
    },
    {
      name: `Pakaian\nPria`,
      image: require('../../../../assets/icon/T-shirt.png'),
      onClick: () => console.log(),
    },
    {
      name: 'Skincare',
      image: require('../../../../assets/icon/Skincare.png'),
      onClick: () => console.log(),
    },
    {
      name: 'Sepatu',
      image: require('../../../../assets/icon/Shoes.png'),
      onClick: () => console.log(),
    },
    {
      name: 'Elektronik',
      image: require('../../../../assets/icon/Phone-Desktop.png'),
      onClick: () => console.log(),
    },
    {
      name: 'Lainnya',
      image: require('../../../../assets/icon/More.png'),
      onClick: () => navigation.push('MapsSearch'),
    },
  ];

  const banner = [
    {
      image: require('../../../../assets/illustration/Banner.png'),
    },
    {
      image: require('../../../../assets/illustration/Banner-1.png'),
    },
    {
      image: require('../../../../assets/illustration/Banner-2.png'),
    },
    {
      image: require('../../../../assets/illustration/Banner-3.png'),
    },
  ];

  const product = [
    {
      storeId: '1',
      name: 'Hot Curry Man',
      place: 'Jakarta Pusat',
      price: 35000,
      image: [
        {id: '1', image: require('../../../../assets/product/curry.jpg')},
        {id: '2', image: require('../../../../assets/product/burger.jpg')},
      ],
      description:
        '“Ya Allah, berilah manfaat kepadaku dengan apa-apa yang Engkau ajarkan kepadaku, dan ajarkanlah aku apa-apa yang bermanfaat bagiku, Dan tambahkanlah ilmu kepadaku.” (HR. at-Tirmidzi dan Ibnu Majah).',
    },
    {
      storeId: '2',
      name: 'Pizza Delicious',
      category: 'Sneakers High School',
      place: 'Jakarta Selatan',
      price: 125000,
      discount: 10,
      image: [
        {id: '1', image: require('../../../../assets/product/pizza.jpg')},
        {id: '2', image: require('../../../../assets/product/soup.jpg')},
      ],
      description:
        '“Ya Allah, berilah manfaat kepadaku dengan apa-apa yang Engkau ajarkan kepadaku, dan ajarkanlah aku apa-apa yang bermanfaat bagiku, Dan tambahkanlah ilmu kepadaku.” (HR. at-Tirmidzi dan Ibnu Majah).',
    },
    {
      storeId: '3',
      name: 'Sushi Fresh From Garden',
      place: 'Kab. Bandung',
      price: 54000,
      image: [
        {id: '1', image: require('../../../../assets/product/sushi.jpg')},
        {id: '2', image: require('../../../../assets/product/burger.jpg')},
      ],
      description:
        '“Ya Allah, berilah manfaat kepadaku dengan apa-apa yang Engkau ajarkan kepadaku, dan ajarkanlah aku apa-apa yang bermanfaat bagiku, Dan tambahkanlah ilmu kepadaku.” (HR. at-Tirmidzi dan Ibnu Majah).',
    },
  ];

  useEffect(() => {});

  const onScrollEnd = e => {};

  return {
    category,
    navigation,
    onScrollEnd,
    banner,
    product,
  };
};

export default useAction;

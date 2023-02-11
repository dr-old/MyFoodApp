import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color, styles} from '../../utils/styles';
import {ButtonIcon, Divider, InputText} from '../atoms';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function NavHome({
  title,
  subtitle,
  value,
  onChangeText,
  onClick,
  onSearch,
  onProfile,
}) {
  const [isFocus, setFocus] = useState(null);

  return (
    <>
      <View style={stylesCust.header}>
        <View style={stylesCust.headerContent}>
          <View style={stylesCust.headerLocation}>
            <Text style={styles.p4(color.white)}>Lokasi</Text>
            <Text style={styles.h5(color.white)} numberOfLines={1}>
              Jl. Pangadegan selatan 8
            </Text>
          </View>
          <View style={stylesCust.headerButton}>
            <ButtonIcon
              type={stylesCust.buttonType}
              name="heart"
              size={20}
              disabled={true}
            />
            <ButtonIcon
              type={stylesCust.buttonType}
              name="shopping-cart"
              size={20}
              disabled={true}
            />
          </View>
        </View>
        <Text style={stylesCust.title}>Hi, Danni Ramdan</Text>
        {title ? <Text style={stylesCust.title}>{title}</Text> : null}
        {subtitle ? <Text style={stylesCust.subtitle}>{subtitle}</Text> : null}
      </View>
      {onSearch ? (
        <View style={stylesCust.search}>
          <View style={stylesCust.searchInput(color.white)}>
            <FontAwesome5 name="search" size={20} color={color.tgrey3} />
            <Divider width={10} />
            <InputText
              placeholder="Search in here ..."
              value={value}
              onChangeText={onChangeText}
              returnKeyType="search"
              onSubmitEditing={onSearch}
              onBlur={() => setFocus(false)}
              onFocus={() => setFocus(true)}
            />
          </View>
        </View>
      ) : null}
    </>
  );
}

const stylesCust = StyleSheet.create({
  headerButton: {flexDirection: 'row'},
  headerLocation: {flex: 1},
  headerContent: {flex: 1, flexDirection: 'row', marginHorizontal: 30},
  profile: {
    backgroundColor: color.bluep5,
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    height: 40,
    flexDirection: 'row',
    marginTop: -20,
    marginHorizontal: 30,
  },
  searchInput: borderColor => ({
    borderWidth: 1,
    borderColor: borderColor,
    backgroundColor: color.white,
    borderRadius: 10,
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  }),
  header: {
    backgroundColor: color.bluep5,
    height: 150,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  buttonType: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: color.white,
  },
  buttonFloat: {position: 'absolute', left: 0, marginLeft: 30},
  title: [
    styles.h3(color.white),
    {textTransform: 'none', marginHorizontal: 30, marginBottom: 10},
  ],
  subtitle: [styles.p4(color.tgrey3, 'center'), {textTransform: 'none'}],
});

export default NavHome;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Button,
  Favorite,
  Form,
  Login,
  Product,
  Register,
  Setting,
  Splash,
  Typography,
} from '../containers/pages';
import TabStack from './TabStack';

const Stack = createNativeStackNavigator();

function DashboardStack() {
  const page = [
    {name: 'Splash', comp: Splash, header: false},
    {name: 'Home', comp: TabStack, header: false},
    {name: 'Form', comp: Form, header: false},
    {name: 'Button', comp: Button, header: false},
    {name: 'Setting', comp: Setting, header: false},
    {name: 'Typography', comp: Typography, header: false},
    {name: 'Product', comp: Product, header: false},
    {name: 'Favorite', comp: Favorite, header: false},
    {name: 'Login', comp: Login, header: false},
    {name: 'Register', comp: Register, header: false},
  ];

  return (
    <Stack.Navigator initialRouteName="Splash">
      {page.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.comp}
            options={{headerShown: item.header}}
          />
        );
      })}
    </Stack.Navigator>
  );
}

export default DashboardStack;

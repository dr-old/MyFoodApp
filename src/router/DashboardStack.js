import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Button,
  Form,
  Home,
  Setting,
  Splash,
  Typography,
} from '../containers/pages';

const Stack = createNativeStackNavigator();

function DashboardStack() {
  const page = [
    {name: 'Splash', comp: Splash, header: false},
    {name: 'Home', comp: Home, header: false},
    {name: 'Form', comp: Form, header: false},
    {name: 'Button', comp: Button, header: false},
    {name: 'Setting', comp: Setting, header: false},
    {name: 'Typography', comp: Typography, header: false},
  ];

  return (
    <Stack.Navigator initialRouteName="Home">
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

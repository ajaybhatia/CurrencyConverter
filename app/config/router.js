import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Home from '../components/Home';
import Detail from '../components/Detail';

export const Drawer = DrawerNavigator({
  Home: {
    screen: Home
  },
  Detail: {
    screen: Detail
  }
});

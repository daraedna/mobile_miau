import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons';

import Animals from '../pages/Animals';
import Necessites from '../pages/Necessites';
import MyAnimals from '../pages/MyAnimals';

export default createAppContainer(
  createBottomTabNavigator({
    Animais: {
      screen: Animals,
      navigationOptions: {
        tabBarLabel: "Inicio",
        tabBarIcon: () => (
          <Ionicons name="md-paw" size={30} color="#2F4FA7" />
        )
      }
    },
    Necessidades: {
      screen: Necessites,
      navigationOptions: {
        tabBarLabel: "Necessidades",
        tabBarIcon: () => (
          <Ionicons name="md-business" size={30} color="#2F4FA7" />
        )
      }
    },
    MeusAnimais: {
      screen: MyAnimals,
      navigationOptions: {
        tabBarLabel: "Meus Animais",
        tabBarIcon: () => (
          <Ionicons name="md-add-circle" size={30} color="#2F4FA7" />
        )
      }
    }
  })
);

import {  createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Animals from '../pages/Animals';
import Necessites from '../pages/Necessites';

const mainNavigation = createBottomTabNavigator({
  Animais: Animals,
  Necessidades: Necessites,
},
{
  tabBarOptions: {
    activeTintColor: '#ff3',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      justefyContent: 'center',
      alignItens: 'center',
      backgroundColor: 'blue',
      padding:15
    },
  }
}

);

export default createAppContainer(mainNavigation);
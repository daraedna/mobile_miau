import {  createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Animals from '../pages/Animals';
import Necessites from '../pages/Necessites';
import MyAnimals from '../pages/MyAnimals';


const mainNavigation = createBottomTabNavigator({
  Animais: Animals,
  Necessidades: Necessites,
  MeusAnimais: MyAnimals,
},
{
  tabBarOptions: {
    activeTintColor: '#FFF',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      justefyContent: 'center',
      alignItens: 'center',
      backgroundColor: '#0e0872',
      padding:15
    },
  }
}

);

export default createAppContainer(mainNavigation);
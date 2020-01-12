import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Register from './pages/Register';
import Animals from './pages/Animals';
import Necessites from './pages/Necessites';
import RegisterAnimal from './pages/RegisterAnimal';
import All from './pages/All';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Register,
        All
    })
);
  
export default Routes;
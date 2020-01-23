import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import All from './pages/All';

const Routes = createAppContainer(
    createStackNavigator({
        Home: { screen: Home },
        Login: {
            screen: Login,
            navigationOptions: {
                headerShown: false,
            }
        },
        Register: {
            screen: Register,
            navigationOptions: {
                headerShown: false,
            }
        },
        All: {
            screen: All,
            navigationOptions: {
                headerShown: false,
            }
        }
    })
);

export default Routes;

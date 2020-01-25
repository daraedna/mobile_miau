import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import All from './pages/All';
import Profile from './pages/Profile';
import RegisterAnimal from './pages/RegisterAnimal';

const Routes = createAppContainer(
    createStackNavigator({
        Home: {
            screen: Home,
            navigationOptions: {
                headerShown: false,
            }
        },
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
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                headerShown: false,
            }
        },
        RegisterAnimal: {
            screen: RegisterAnimal,
            navigationOptions: {
                headerShown: false,
            }
        }
    })
);

export default Routes;

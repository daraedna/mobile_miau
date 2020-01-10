import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Register from './pages/Register';
import Animals from './pages/Animals';
import Necessites from './pages/Necessites';
import Book from './pages/Book';
import RegisterAnimal from './pages/RegisterAnimal'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Register,
        Animals,
        Necessites,
        Book,
        RegisterAnimal
    })
);

export default Routes;
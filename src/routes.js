import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Register from './pages/Register';
import Index from './pages/Index';
import Book from './pages/Book';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Register,
        Index,
        Book
    })
);

export default Routes;
import React from 'react';
import { AsyncStorage, Alert, Image } from 'react-native';
import { Header as HeaderUI, Left, Right, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { StackActions, NavigationActions } from 'react-navigation';

import logo from '../assets/logoWhite.png'

export default function Header({ navigation, profile }) {
    const home = () => {
        navigation.navigate('All');
    };

    const navProfile = () => {
        navigation.navigate('Profile');
    };

    const alert = () => {
        Alert.alert('Sair', 'Você tem certeza ?', [
            { text: 'Não', style: 'cancel' },
            { text: 'Sim', onPress: () => logout() }
        ]);
    };

    const logout = async () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Login' })],
        });
        navigation.dispatch(resetAction);
        await AsyncStorage.clear();
    };

    if (profile) {
        return (
            <HeaderUI style={{ backgroundColor: '#2F4FA7' }}>
                <Left>
                    <Button transparent onPress={home}>
                        <Image source={logo} />
                    </Button>
                </Left>
                <Right>
                    <Button transparent onPress={alert}>
                        <Ionicons name="md-log-out" size={25} color="#FFF" />
                    </Button>
                </Right>
            </HeaderUI>
        )
    }
    return (
        <HeaderUI style={{ backgroundColor: '#2F4FA7' }}>
            <Left>
                <Button transparent onPress={home}>
                    <Image source={logo} />
                </Button>
            </Left>
            <Right>
                <Button transparent onPress={navProfile}>
                    <Ionicons name="md-person" size={25} color="#FFF" />
                </Button>
                <Button transparent onPress={alert}>
                    <Ionicons name="md-log-out" size={25} color="#FFF" />
                </Button>
            </Right>
        </HeaderUI>
    )
};

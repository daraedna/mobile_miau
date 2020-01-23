import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, AsyncStorage, StyleSheet } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadFont();
    }, []);

    const loadFont = async () => {
        await Font.loadAsync({
            Roboto: require('../../node_modules/native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('../../node_modules/native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        });
        setLoading(true);
        AsyncStorage.getItem('user_id').then(user => {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: user ? 'All' : 'Login' })],
            });
            navigation.dispatch(resetAction);
        });
    };

    if (!loading) {
        return <AppLoading />;
    }
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

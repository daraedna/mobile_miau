import React, { useState, useEffect } from 'react';
import { AsyncStorage, View, StyleSheet, Text } from 'react-native';
import { Container, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import Header from '../components/Header';
import MyAnimalList from '../components/MyAnimalList';

import api from '../services/api';

export default function List({ navigation }) {
    const [myAnimals, setMyAnimals] = useState([]);

    useEffect(() => {
        async function loadMyAnimals() {
            const user_id = JSON.parse(await AsyncStorage.getItem('user')).user._id;
            const { data } = await api.get('/myAnimals', { headers: { user_id } });
            const { animals } = data;
            await setMyAnimals(animals);
        };
        loadMyAnimals();
    });

    const register = () => {
        navigation.navigate('RegisterAnimal');
    };

    return (
        <Container>
            <Header navigation={navigation} />
            <MyAnimalList myAnimals={myAnimals} />
            <View style={{ flex: 1 }}>
                <Button style={styles.float} rounded onPress={register}>
                    <Ionicons name="md-add" size={25} color="#FFF" />
                </Button>
            </View>
        </Container>
    )
};

const styles = StyleSheet.create({
    float: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor: '#2F4FA7'
    }
});

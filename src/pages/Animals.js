import React, { useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet,Image, AsyncStorage, TouchableOpacity} from 'react-native';
import api from '../services/api'

import AnimalList from '../components/AnimalList'

// import logo from '../assets/logo.png'
// import back from '../../assets/icons/back.png'
import Navbar from '../components/Navbar';

export default function List( {navigation} ) {

    logout = async () => {
        await AsyncStorage.clear();
        navigation.navigate('Login');
      };


    const [animals, setAnimals] = useState([]);
    const [username, setUsername] = useState('');

    
    const fetchData = async() => {
        const response = await api.get('/animals');

        await setAnimals(response.data.animals);
    }

    useEffect(() => {
        AsyncStorage.getItem('name').then(name => {
            setUsername(name);
        });

        fetchData( );
    }, []);
return (
    <SafeAreaView style={styles.container}>

        <Navbar> </Navbar>

        <AnimalList animals={animals}></AnimalList>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },

    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'space-around',
        marginTop: 30,
    },

    logo: {
    
    }, 

    logout: {

    },

    profile: {
      
    },
});
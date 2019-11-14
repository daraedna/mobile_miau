import React, { useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet,Image, AsyncStorage} from 'react-native';
import api from '../services/api'

import AnimalList from '../components/AnimalList'

import logo from '../assets/logo.png'

export default function List() {
    const [animals, setAnimals] = useState([]);
    const [username, setUsername] = useState('');
    
    const fetchData = async() => {
        const response = await api.get('/animals');

        // console.log(response.data.animals);

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
        <Image style={styles.logo} source= {logo} />

        <AnimalList animals={animals}></AnimalList>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logo: {
        height: 32,
        resizeMode: "contain",
        marginTop: 32,
        
    }
});
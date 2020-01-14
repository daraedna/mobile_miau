import React, { useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet,Image, AsyncStorage, TouchableOpacity} from 'react-native';
import api from '../services/api'

import NecessiteList from '../components/NecessiteList'
import Navbar from '../components/Navbar'

import logo from '../assets/logo.png'
import back from '../../assets/icons/back.png'

export default function List( {navigation} ) {

    logout = async () => {
        await AsyncStorage.clear();
        navigation.navigate('Login');
      };


    const [necessities, setNecessities] = useState([{}]);
    const [nameInst, setNameInst] = useState('');

    
    const fetchData = async() => {
        const response = await api.get('/necessitiesList');

        await setNecessities(response.data.necessities);
    }

    useEffect(() => {
        AsyncStorage.getItem('name').then(name => {
            setNameInst(name);
        });

        fetchData( );
    }, []);

return (
    <SafeAreaView style={styles.container}>
         <Navbar> </Navbar>
        <NecessiteList necessities={necessities}></NecessiteList>
        
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
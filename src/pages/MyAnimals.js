import React, { useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet,Image, AsyncStorage, TouchableOpacity} from 'react-native';
import api from '../services/api'

import Navbar from '../components/Navbar';
import MyAnimalList from '../components/MyAnimalList';


export default function List( {navigation} ) {

    const [myAnimals, setMyAnimals] = useState([]);

    useEffect(() => {
        async function loadMyAnimals(){

           const user_id = await AsyncStorage.getItem('user_id');
            
            const {data} = await api.get('/myAnimals', {
                headers: { user_id }
           });
           console.log('user.id')
           const { animals } = data;

          await setMyAnimals(animals);
           console.log(animals);
        }
        loadMyAnimals();
    }, []); 
return (
    <SafeAreaView style={styles.container}>

        <Navbar> </Navbar>
        <MyAnimalList myAnimals= {myAnimals}> </MyAnimalList>
        

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
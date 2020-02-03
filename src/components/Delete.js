import React, {useState} from 'react';
import { AsyncStorage, Alert} from 'react-native';
import api from '../services/api';


export const alertExcluir = () => {
    Alert.alert('Excluir', 'Você tem certeza ?', [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: () => Excluir()}
    ]);
};

export const Excluir  = async () => {

    const user_id = JSON.parse(await AsyncStorage.getItem('user')).user._id;


    const { data } = await api.delete('/animals', { 
        headers: { user_id },
    });
     const { animals } = data;
 
    console.log(animals);
     return await (animals);
};


import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import api from '../services/api';

export default function Register( {navigation} ) {
 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');


    async function handleRegister(event){
        
        event.preventDefault();

        try {
            await api.post('/register', { name, email, password, phone, city, state })
             
            navigation.navigate('Login');
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <View>
   
            <Text>NOME *</Text>
            <TextInput
                placeholder="Seu nome"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={setName}
            />
                
            <Text >E-MAIL *</Text>
            <TextInput
                placeholder="Seu e-mail"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
            />

            <Text >SENHA *</Text>
            <TextInput
                placeholder="*****"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />

            <Text>CONTATO *</Text>
            <TextInput
                placeholder="Telefone p/ contato"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
                value={phone}
                onChangeText={setPhone}
            />

            <Text>CIDADE *</Text>
            <TextInput
                placeholder="Mossoró"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
                value={city}
                onChangeText={setCity}
            />

             <Text>ESTADO *</Text>
            <TextInput
                placeholder="RN"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
                value={state}
                onChangeText={setState}
            />

            <TouchableOpacity onPress={handleRegister}>
                    <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )


}
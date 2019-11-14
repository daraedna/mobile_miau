import React, { useState, useEffect } from 'react';
import {View, AsyncStorage, KeyboardAvoidingView, Image, Text, TextInput,TouchableOpacity, StyleSheet } from 'react-native';

import api from '../services/api'

import logo from '../assets/logo.png'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user_id').then (user => {
            if (user) {
                navigation.navigate('Index');
            }
        })
    }, []);
    
    async function handleSubmit( ) {

        const { data } = await api.post('/authenticate', { email, password });

        const { user, token } = data;
        const { id } = user;

        await AsyncStorage.setItem('user_id', id);
        await AsyncStorage.setItem('name', user.name);
        await AsyncStorage.setItem('email', user.email);
        await AsyncStorage.setItem('phone', JSON.stringify(user.phone));
        await AsyncStorage.setItem('token', token);

        navigation.navigate('Index');
    }

    return(
        <KeyboardAvoidingView behavior="padding" style ={styles.container}>
            <Image source={logo} />    
            
            <View style={styles.form}>
                <Text style={styles.label}>E-MAIL *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Seu e-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>SENHA *</Text>
                <TextInput
                    style={styles.input}
                    placeholder="****"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPass}
                />

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.register}>Cadastra-se</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center'
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },
    
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 10

    },

    button: {
        height: 42,
        backgroundColor: '#F0CB67',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10

    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    register:{
        color: '#2F4FA7',
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 32
    }
});
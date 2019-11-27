import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView} from 'react-native';
import Modal from "react-native-modal";
import * as ImagePicker from 'expo-image-picker';


import api from '../services/api';

import logo from '../assets/logo.png'


export default function Register( {navigation} ) {
 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [error, setError] = useState(false);
    const [img_user, setImgUser] = useState(null);

    async function handleChoosePhoto(){
        const image = await ImagePicker.launchImageLibraryAsync({
        });
        console.log(image)
        if (image.uri) {
           return setImgUser(image);
        }

    }

    async function handleRegister(event){
        
        event.preventDefault();
        
        // const localUri = img_user.uri;
        // const filename = localUri.split('/').pop();
       
        // const match = /\.(\w+)$/.exec(filename);
        // const type = match ? `img_user/${match[1]}` : `img_user`;

        const formData = new FormData();
        formData.append('imgUser', img_user);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('phone', phone);
        formData.append('city', city);
        formData.append('state', state);

        // navigation.navigate('Login');
        // console.log(formData);
        
        // const request = new XMLHttpRequest();
        
        // console.log(formData);
        // console.log('XHMLTTP:', request);

        // await request.open('POST', 'http://10.0.0.104:3331/register');
        // await request.send(formData);

        await api.post('/register', {
            formData
        });
        
        // await fetch('http://10.0.0.104:3331/register', {
        //     method: 'post',
        //     body: formData,
        //     header: {
        //       'content-type': 'multipart/form-data',
        //     },
        //   });
        // try {
        //     // const {data} = await api.post('/register', { img_user: File , name, email, password, phone, city, state })  
        //     const {error} = data;
            
        //     // console.log(data);

        //     if(error){
        //         await setError(true);
        //     }else{
        //         navigation.navigate('Login');
        //     }
        // } catch (error) {
        //     console.log(error);
        // }
    }
    
    return (
    <ScrollView>

        <KeyboardAvoidingView behavior="padding" style ={styles.container}>
        {
            error ? (
                <Modal
                    isVisible={error}
                    onBackdropPress={() => setError(false)}
                    swipeDirection="left"
                    >
                    <View style={styles.modal}>
                        <Text style={styles.modalText}>Usuário já cadastrado</Text>
                    </View>
              </Modal>
            ) :null
        }
        
            <Image source={logo} />

            <View style ={styles.choosePhoto}>
                {img_user &&(
                    <Image style ={styles.preview}
                        source= {img_user}

                    />
                )}
                <TouchableOpacity 
                onPress={() => {handleChoosePhoto('image.uri')}}>
                    <Text style={styles.cancel}>Escolha uma foto</Text>
                </TouchableOpacity>
            </View>

            <View style ={styles.form}>
    
                <Text style ={styles.label}>NOME *</Text>
                <TextInput style ={styles.input}
                    placeholder="Seu nome"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={name}
                    onChangeText={setName}
                />
                    
                <Text style ={styles.label}>E-MAIL *</Text>
                <TextInput style ={styles.input}
                    placeholder="Seu e-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style ={styles.label}>SENHA *</Text>
                <TextInput style ={styles.input}
                    placeholder="*****"
                    placeholderTextColor="#999"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                <Text style ={styles.label}>CONTATO *</Text>
                <TextInput style ={styles.input}
                    placeholder="Telefone p/ contato"
                    placeholderTextColor="#999"
                    // keyboardType="tel"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={phone}
                    onChangeText={setPhone}
                />

                <Text style ={styles.label}>CIDADE *</Text>
                <TextInput style ={styles.input}
                    placeholder="Mossoró"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={city}
                    onChangeText={setCity}
                />

                <Text style ={styles.label}>ESTADO *</Text>
                <TextInput style ={styles.input}
                    placeholder="RN"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={state}
                    onChangeText={setState}
                />

                <TouchableOpacity style ={styles.button} onPress={handleRegister}>
                        <Text style ={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.cancel}>Cancelar</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    </ScrollView>

    )


}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginTop: 32,
        marginBottom: 32,
        justifyContent: 'center',
        alignItems : 'center'
    },
    choosePhoto: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        

    },

    preview: {
        width: 200,
        height: 200,
        marginTop: 16,
        borderRadius: 100,
    },

    modal: {
        display: 'flex',
        width: 200,
        height: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent:'center',
        alignItems: 'center',

    },

    modalText: {
        fontSize: 14,
        fontWeight: 'bold'
    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 32,
        marginTop: 32,
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
    },
    cancel:{
        color: '#2F4FA7',
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 32
    }

});
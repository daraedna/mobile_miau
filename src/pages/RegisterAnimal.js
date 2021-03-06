import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';
import { Container } from 'native-base';
import * as ImagePicker from 'expo-image-picker';

import Header from '../components/Header';

import api from '../services/api';

export default function RegisterAnimal({ navigation }) {
    const [species, setSpecies] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [observation, setObservation] = useState('');
    const [sex, setSex] = useState('');
    const [size, setSize] = useState('');
    const [img, setImg] = useState(null);
    const [submit, setSubmit] = useState(false);

    async function handleChoosePhoto() {
        const image = await ImagePicker.launchImageLibraryAsync({
            base64: true
        });
        if (image.base64) {
            return setImg(image.base64);
        }
    };

    const handleRegister = async () => {
        setSubmit(true);
        const user_id = JSON.parse(await AsyncStorage.getItem('user')).user._id;
        const data = {
            species,
            breed,
            age,
            observation,
            sex,
            size,
            img
        };
        await api.post('/animal', data, { headers: { user_id } }).then(resp => {
            setSubmit(false);
            navigation.navigate('All');
        }).catch(err => {
            setSubmit(false);
            console.log('error');
            console.log(err);
        });
    };

    return (
        <Container>
            <Header navigation={navigation} />
            <ScrollView>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <View style={styles.choosePhoto}>
                        {img && (
                            <Image style={styles.preview}
                                source={{ uri: `data:image/jpeg;base64,${img}` }}
                            />
                        )}
                        <TouchableOpacity
                            onPress={() => { handleChoosePhoto('image.uri') }}>
                            <Text style={styles.cancel}>Escolha uma foto</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.form}>
                        <Text style={styles.label}>ESPECIE *</Text>
                        <TextInput style={styles.input}
                            placeholder="cachorro"
                            placeholderTextColor="#999"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={species}
                            onChangeText={setSpecies}
                        />
                        <Text style={styles.label}>RAÇA *</Text>
                        <TextInput style={styles.input}
                            placeholder="Labrador"
                            placeholderTextColor="#999"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={breed}
                            onChangeText={setBreed}
                        />
                        <Text style={styles.label}>IDADE *</Text>
                        <TextInput style={styles.input}
                            placeholder="1"
                            placeholderTextColor="#999"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={age}
                            onChangeText={setAge}
                        />
                        <Text style={styles.label}>OBSERVAÇÃO </Text>
                        <TextInput style={styles.input}
                            placeholder="Muito docil"
                            placeholderTextColor="#999"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={observation}
                            onChangeText={setObservation}
                        />
                        <Text style={styles.label}>SEXO *</Text>
                        <TextInput style={styles.input}
                            placeholder="Masculino"
                            placeholderTextColor="#999"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={sex}
                            onChangeText={setSex}
                        />
                        <Text style={styles.label}>TAMANHO *</Text>
                        <TextInput style={styles.input}
                            placeholder="Filhote"
                            placeholderTextColor="#999"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={size}
                            onChangeText={setSize}
                        />
                        <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={submit}>
                            {
                                submit ? <ActivityIndicator /> : <Text style={styles.buttonText}>Cadastrar</Text>
                            }
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 32,
        marginBottom: 32,
        justifyContent: 'center',
        alignItems: 'center'
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
        justifyContent: 'center',
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
    register: {
        color: '#2F4FA7',
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 32
    },
    cancel: {
        color: '#2F4FA7',
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 32
    }
});

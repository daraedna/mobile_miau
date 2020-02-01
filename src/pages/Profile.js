import React, { useState, useEffect } from 'react';
import { AsyncStorage, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Button, Container, Input, Item, Text, Thumbnail, Label } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

import Header from '../components/Header';

export default function Profile({ navigation }) {
    const [user, setUser] = useState({});

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {
        const user = JSON.parse(await AsyncStorage.getItem('user')).user;
        setUser(user);
    };

    return (
        <Container>
            <Header navigation={navigation} profile={true} />
            <ScrollView>
                <KeyboardAvoidingView style={styles.profile} enabled>
                    <Thumbnail source={{ uri: `data:image/jpeg;base64,${user.img_user}` }} />
                    <Item stackedLabel style={styles.item}>
                        <Label>Nome</Label>
                        <Input value={user.name} />
                    </Item>
                    <Item stackedLabel style={styles.item}>
                        <Label>E-mail</Label>
                        <Input value={user.email} />
                    </Item>
                    <Item stackedLabel style={styles.item}>
                        <Label>Cidade</Label>
                        <Input value={user.city} />
                    </Item>
                    <Item stackedLabel style={styles.item}>
                        <Label>Senha</Label>
                        <Input placeholder="Senha" />
                    </Item>
                    <Button style={styles.button} iconLeft primary>
                        <Ionicons name="md-send" size={20} color="#FFF" />
                        <Text>Atualizar Perfil</Text>
                    </Button>
                </KeyboardAvoidingView>
            </ScrollView>
        </Container>
    )
};

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        height: 450,
        marginTop: 10
    },
    item: {
        height: 50,
        marginTop: 10
    },
    button: {
        marginTop: 20,
        padding: 5,
    }
});

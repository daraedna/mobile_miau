import React from 'react';
import { View, Text, Alert, AsyncStorage } from 'react-native';
import { Content, List, ListItem, Thumbnail, Left, Body } from 'native-base';

import { alertExcluir } from   '../components/Delete';


export default function MyAnimalList({ myAnimals }) {

    return (
        <Content>
            <List>
                {
                    myAnimals.map(animal => (
                        <ListItem thumbnail key={animal._id}>
                            <Left>
                                <Thumbnail square source={{ uri: `data:image/jpeg;base64,${animal.img}` }} />
                            </Left>
                            <Body>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Text style={{ marginRight: 4 }}>Raça:</Text>
                                        <Text style={{ color: '#828282'}}>{animal.breed}</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Text style={{ marginRight: 4 }}>Idade:</Text>
                                        <Text style={{ color: '#828282'}}>{animal.age}</Text>
                                    </View>
                                    <View> 
                                        <Text onPress= {alertExcluir} style={{ color: 'red'}} > Apagar </Text>
                                    </View>
                                </View>
                            </Body>
                        </ListItem>
                    ))
                }
            </List>
        </Content>
    );
};

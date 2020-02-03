import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Content, List, ListItem, Thumbnail, Left, Body, Right } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const MyAnimalList = ({ myAnimals, deleteAnimal }) => (
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
                                    <Text style={{ color: '#828282' }}>{animal.breed}</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Text style={{ marginRight: 4 }}>Idade:</Text>
                                    <Text style={{ color: '#828282' }}>{animal.age}</Text>
                                </View>
                            </View>
                        </Body>
                        <Right>
                            <TouchableOpacity onPress={() => deleteAnimal(animal._id)}>
                                <Ionicons name="md-trash" size={20} style={{ color: 'red' }} />
                            </TouchableOpacity>
                        </Right>
                    </ListItem>
                ))
            }
        </List>
    </Content>
)

export default MyAnimalList;


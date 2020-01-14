import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native';

export default function MyAnimalList ( { myAnimals } ) {
        return (
            <ScrollView style={styles.container} >
                <Text style={styles.title}> Meus animais cadastrados </Text>
                {
                    (myAnimals =! []) ?
                    myAnimals.map(animal => {
                        return(
                            <View key={animal._id}>
    
                                <View style={styles.listItem}>
                                    <Image style={styles.img} source={{ uri: animal.img_url.replace('localhost', '10.0.0.107') }} />
                                    <Text >{animal.species}</Text>
                                    <Text >{animal.breed}</Text>
                                    <Text >{animal.age}</Text>
                                    <Text >{animal.size}</Text>
                                    <Text >{animal.observation}</Text>
                                </View>
    
    
                            </View>
                        )
                    }) : <Text> Não possui animais cadastrados </Text>
                } 

            </ScrollView>
        );
    }
    const styles = StyleSheet.create({
        container: {
            marginTop: 32,
        },
    
        title: {
            fontSize: 20,
            color: '#444',
            paddingHorizontal:20,
            marginBottom: 16,
            fontWeight: 'bold'
        },
    
        listItem: {
            paddingBottom: 20,
        },
    
        img: {
           width: '100%',
           height: 250,
           resizeMode: 'cover',
           marginLeft: 0,
        }
    
    
    });
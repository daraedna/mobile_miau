import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function AnimalList({ animals }) {
    return(
        <ScrollView  style={styles.container}>
            <Text style={styles.title}>Animais</Text>
            {
                animals.map(animals => {
                    console.log({ uri: animals.img_url })
                    return(
                        
                        <View key={animals._id}>


                            <View style={styles.listItem}>
                                <Image style={styles.img} source={{ uri: animals.img_url }}/>
                                <Text style={styles.owner}>{animals.user}</Text>
                                <Text style={styles.breed}>{animals.breed}</Text>
                            </View>


                        </View>
                    )
                }) 
            }
        </ScrollView>
    ) 
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },

    title: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal:20,
        marginBottom: 15,
        fontWeight: 'bold'
    },

    listItem: {
        paddingHorizontal: 15
    },

    img: {
       width: 200,
       height: 120,
       resizeMode: 'cover',
       borderRadius: 2,
    }


});
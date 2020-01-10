import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, AsyncStorage, TouchableOpacity} from 'react-native';

export default function AnimalList({ animals }) {


    return(

        <ScrollView  style={styles.container}>


            <Text style={styles.title}>Animais</Text>
            {
                animals.map(animals => {
                    
                    return(
                        
                        <View key={animals._id}>

                            <View style={styles.listItem}>
                                <Image style={styles.img} source={{ uri: animals.img_url.replace('localhost', '10.0.0.104') }} />
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
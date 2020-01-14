import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native';

export default function NecessiteList({ necessities }) {


    return(

        <ScrollView  style={styles.container}>


            <Text style={styles.title}>Necessidades</Text>
            {
                necessities.map(necessities => {
                    return(
                        
                        <View key={necessities._id}>

                            <View style={styles.listItem}>
                                 {/* <Image style={styles.img} source= { {uri: necessities.img_nec_url.replace('localhost', '10.0.0.107')}}></Image> */}
                                <Text style={styles.owner}>{necessities.name}</Text>
                               
                                <Text style={styles.breed}>{necessities.inst}</Text>
                                <Text style={styles.breed}>{necessities.qtd}</Text>
                                <Text style={styles.breed}>{necessities.uni_medida}</Text>
                            </View>


                        </View>
                    )
                }) 
            } ? : 'Não possui Animais cadastrados'
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
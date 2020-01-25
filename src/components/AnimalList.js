import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Content, Thumbnail, Text } from 'native-base';

import logo from '../assets/logo.png';

export default function AnimalList({ animals }) {
    return (
        <Content>
            {
                animals.map(data => (
                    <View style={{ flex: 1, flexDirection: 'column' }} key={data.id}>
                        <View style={styles.cardHeader}>
                            <Thumbnail small source={logo} />
                            <Text style={{ marginLeft: 10 }}>{data.user}</Text>
                        </View>
                        <View>
                            <Image source={{ uri: 'https://abrilsuperinteressante.files.wordpress.com/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png' }}
                                style={{ height: 200, width: '100%', flex: 1 }}
                            />
                        </View>
                        <View style={styles.cardFooter}>
                            <View style={styles.cardFooterItem}>
                                <Text style={styles.cardFooterItemText}>Espécie:</Text>
                                <Text style={styles.cardNote} note>{data.species}</Text>
                            </View>
                            <View style={styles.cardFooterItem}>
                                <Text style={styles.cardFooterItemText}>Raça:</Text>
                                <Text style={styles.cardNote} note>{data.breed}</Text>
                            </View>
                            <View style={styles.cardFooterItem}>
                                <Text style={styles.cardFooterItemText}>Sexo:</Text>
                                <Text style={styles.cardNote} note>{data.sex}</Text>
                            </View>
                            <View style={styles.cardFooterItem}>
                                <Text style={styles.cardFooterItemText}>Tamanho:</Text>
                                <Text style={styles.cardNote} note>{data.size}</Text>
                            </View>
                        </View>
                        <View style={styles.cardObservation}>
                            <Text style={styles.cardObservationText}>Observação:</Text>
                            <Text style={styles.cardNote} note>{data.observation}</Text>
                        </View>
                    </View>
                ))
            }
        </Content>
    )
}

const styles = StyleSheet.create({
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12
    },
    cardFooter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    cardFooterItem: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    cardFooterItemText: {
        color: '#2F4FA7'
    },
    cardObservation: {
        paddingLeft: 10,
        paddingBottom: 10
    },
    cardObservationText: {
        color: 'grey',
        fontSize: 15
    },
    cardNote: {
        fontSize: 12
    }
});

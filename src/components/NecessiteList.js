import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Content, Thumbnail, Text } from 'native-base';

import logo from '../assets/logo.png';

export default function NecessiteList({ necessities }) {
    return (
        <Content>
            {
                necessities.map(data => (
                    <View style={{ flex: 1, flexDirection: 'column' }} key={data.id}>
                        <View style={styles.cardHeader}>
                            <Thumbnail small source={logo} />
                            <Text style={{ marginLeft: 10 }}>{data.inst}</Text>
                        </View>
                        <View>
                            <Image source={{ uri: data.img_nec_url.replace('10.0.0.104', '10.0.0.107') }}
                                style={{ height: 200, width: '100%', flex: 1 }}
                            />
                        </View>
                        <View style={styles.cardFooter}>
                            <View style={styles.cardFooterItem}>
                                <Text style={styles.cardFooterItemText}>Nome:</Text>
                                <Text style={styles.cardNote} note>{data.name}</Text>
                            </View>
                            <View style={styles.cardFooterItem}>
                                <Text style={styles.cardFooterItemText}>Quantidade:</Text>
                                <Text style={styles.cardNote} note>{data.qtd}</Text>
                            </View>
                            <View style={styles.cardFooterItem}>
                                <Text style={styles.cardFooterItemText}>Medida:</Text>
                                <Text style={styles.cardNote} note>{data.uni_medida}</Text>
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

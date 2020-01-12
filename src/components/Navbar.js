import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native';

import logo from '../assets/logo.png'
import back from '../../assets/icons/back.png'

class Navbar extends Component {
    render() {
        return (
            <View style={styles.header}> 

        <TouchableOpacity style={styles.logout} onPress={logout}>
                 <Image source= {back}/>
        </TouchableOpacity>
            
        
            <Image style={styles.logo} source= {logo} />

            <Text style={styles.profile} > PERFIL </Text>

        </View>
        );
    }
}


export default Navbar;
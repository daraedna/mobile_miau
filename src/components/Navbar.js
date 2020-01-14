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

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },

    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'space-around',
        marginTop: 30,
    },

    logo: {
    
    }, 

    logout: {

    },

    profile: {
      
    },
});


export default Navbar;
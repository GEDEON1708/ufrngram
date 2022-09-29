import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';


export default function Header(){
    return (
        <View style={styles.header}>
          <Image style= {styles.ufrngram}source={require('../assets/images/ufrngram.png')}/>
          <FontAwesome5 name="paper-plane" size={24} color="black"/>
      </View>
    );
}

const styles = StyleSheet.create({

    header:{
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'space-between',
      padding:10,
      height:50,
      backgroundColor: '#fff',
    },
    ufrngram:{
      height:25,
      width:110,
    },
});
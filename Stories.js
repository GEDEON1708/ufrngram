import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';


export default function Stories(){
    const stories = [
        {
            id:1,
            nome: 'Albert',
            src: require('../assets/images/albert_einstein-rick.jpg')
        },

        {
            id:2,
            nome: 'Rick Sanchez',
            src: require('../assets/images/rick_and_morty_portail.jpg')
        },

        {
            id:3,
            nome: 'Squanch',
            src: require('../assets/images/squanch.jpg')
        },

        {
            id:4,
            nome: 'Gedeon',
            src: require('../assets/images/evil_morty.jpg')
        },

        {
            id:5,
            nome: 'Sanchez',
            src: require('../assets/images/rick-plannig_space.jpg')
        },
    ];

    function renderItem({item}){
       return  <View style={styles.story}>
        <Image style={styles.imgstory}source={item.src}/>
        <Text>{item.nome}</Text>
       </View>

    }

    return (
        <View style={styles.stories}>
           <FlatList
              data={stories}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator = {false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    
    stories:{
      flexDirection:'row',
      height:90,
      backgroundColor: '#fff',
    },
    story:{
      height:90,
      width:90,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    imgstory:{
      width:70,
      height:70,
      borderRadius: 35,
    },
});
  
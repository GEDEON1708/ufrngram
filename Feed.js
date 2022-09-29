import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';




export default function Feed(){
 
    const feed = [
        {
            id: 1,
            nome: 'Squanch',
            imgPerfil: require('../assets/images/squanch.jpg'),
            img: require('../assets/images/rick_sanchez_multiverse.jpg'),
            aspectRatio: 1.777,
        },
    
        {
            id: 2,
            nome: 'Pickle Rick',
            imgPerfil: require('../assets/images/rick_picles.jpg'),
            img: require('../assets/images/rick-plannig_space.jpg'),
            aspectRatio: 0.8,
        },
    
        {
            id: 3,
            nome: 'Evil Morty',
            imgPerfil: require('../assets/images/evil_morty.jpg'),
            img: require('../assets/images/dr-strange_rick_sanchez.jpg'),
            aspectRatio: 1,
        },
    
        {
            id: 4,
            nome: 'Morty Smith',
            imgPerfil: require('../assets/images/rick_and_morty_run.jpg'),
            img: require('../assets/images/rick_and_morty_microverse.jpg'),
            aspectRatio: 1.777,
        },
    
        {
            id: 5,
            nome: 'Rick C-137',
            imgPerfil: require('../assets/images/pickle_rick_remastered.jpg'),
            img: require('../assets/images/wubba_lubba_dub_dub.jpg'),
            aspectRatio: 0.8,
        },
    ];
    
    function renderItem({item}) {
        
        return <View style={styles.post}>
                    <View style={styles.postheader}>
                        <View style={styles.postheadesquerda}>
                        <Image style={styles.postheaderimg} source={item.imgPerfil}/>
                        <Text>{item.nome}</Text>
                    </View>
                    <FontAwesome5 name="ellipsis-h" size={17} color="black"/>
                </View>
                <Image style={styles.postimg} aspectRatio={item.aspectRatio} source={item.img}/>
                <View style={styles.footer}>
                    <FontAwesome5 style={styles.footericon} name="heart" size={16} color="black"/>
                    <FontAwesome5 style={styles.footericon} name="comment" size={16} color="black"/>
                </View>
            </View>
    }
    
    return (
        <View style={styles.feed}>
            <FlatList
              data={feed}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator= {false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    feed:{
      flex:1,
      backgroundColor: '#fff',
    },
    post:{
      backgroundColor: '#fff',
    },
    postheader:{
      flexDirection: 'row',
      height:50,
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 5,
    },
    postheadesquerda:{
      flexDirection:'row',
      alignItems: "center",
    },
    postheaderimg:{
      height:50,
      width:50,
      borderRadius: 25,
      marginRight: 5,
    },
    postimg:{
      width: '100%',
      height: undefined,
    },
    footer:{
      height:50,
      backgroundColor:'#fff',
      flexDirection:'row',
      alignItems:'center',
      padding: 10,
    },
    footericon:{
      margin: 5,
    }
});
  
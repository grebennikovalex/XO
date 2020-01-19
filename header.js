import React  from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';


export default function  Header( { box, won, lost, player } ) {
    
        
    if(box.win === 'x') box.winimg = require('./assets/x.png')
    else if(box.win === 'o') box.winimg = require('./assets/o.png')
    
    
    return (
    <View style ={styles.h}>
        <View style = {styles.header}>
            <Text style = {styles.text}>
                PLAYER:  {player.toUpperCase()}
            </Text>
            <Text style = {styles.text}>
                MOVE: {box.move}    
            </Text>
            <Text style = {styles.text}>
                LOST: {lost}  WIN: {won}  
            </Text>
        </View>
            <View style ={[
                styles.boxie,
                {backgroundColor: box.boxie}
                ]}>
                <Image 
                    source = {box.winimg}
                    style = {{ resizeMode: 'stretch'}}
                    />
            </View>
            
        
    </View>
    ) 
}

const styles = StyleSheet.create({
    
    header: {
        width: ((Dimensions.get('screen').width / 3)*2)-10,
        height: (Dimensions.get('screen').width / 3)-8,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 6,
        backgroundColor: '#487eb0'
             
    },

    boxie: {
        width: (Dimensions.get('screen').width / 3)-8,
        height: (Dimensions.get('screen').width / 3)-8,
        marginLeft: 6,
        alignItems: 'center',
        justifyContent: 'center',
},
    h: {
        height: (Dimensions.get('screen').width / 3),
        marginTop: 6,
        flexDirection: 'row',
        
    },

    text: {
        
        fontSize: 22, 
        
        color: 'white',
        fontFamily: 'custom'
    }
    

})    
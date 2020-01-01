import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { reloadBoard } from './board';

export default function Footer(boxes)  {
    return (

    <TouchableOpacity 
        style = {styles.reload}
        onPress = {() => reloadBoard(boxes)}>
            <Text style = {{
                fontSize: 20, 
                fontWeight: 'bold', 
                color: 'white', fontFamily: 'custom'}}>
                RELOAD    
            </Text>    
    </TouchableOpacity>

    
)}

const styles = StyleSheet.create({

    reload: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -3,
        height: '10%',
        backgroundColor: '#273c75',
      }
    });
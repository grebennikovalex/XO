import React, { useState } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity  , Image } from 'react-native';



export default function Box({ item, pressHandler })  {



    return (
        <TouchableOpacity   
        style =  {styles.box}
        disabled = {!item.flag}
        onPress = {() => {pressHandler(item.key)}
      }
        >
        <Image 
          style = {styles.stretch}
          source = {item.img}
         />
        </TouchableOpacity>
    )}

const styles = StyleSheet.create({

  box: {
        alignItems: 'center',
        justifyContent: 'center',
        width: (Dimensions.get('screen').width / 3)-8,
        height: (Dimensions.get('screen').width / 3)-8,
        backgroundColor: '#a9e4f1',
        margin: 3,
    
      },

  win: {
        alignItems: 'center',
        justifyContent: 'center',
        width: (Dimensions.get('screen').width / 3)-8,
        height: (Dimensions.get('screen').width / 3)-8,
        backgroundColor: '#6a89cc',
        margin: 3,
    
      }
      
})
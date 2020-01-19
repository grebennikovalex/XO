import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity } from 'react-native'


export default function AddPlayer({ submitPlayer, setModalOpen }) {

    const [player, setText] = useState('')

const change = (value) => {
    setText(value)
}

    return (
        <View style = {styles.container}>
            <View style = {styles.input}> 
            <TextInput
            placeholder = ' NEW PLAYER...'
            placeholderTextColor = '#c7ecee'
            onChangeText = {change}
            autoFocus
            maxLength = {11}
            style = {[styles.text,
                {color: '#487eb0',
                padding: 40,
                width: '100%',
                }]}
            autoCapitalize = 'characters'
            />
            </View>
            
            <TouchableOpacity style = {[styles.input,{backgroundColor: '#487eb0', height: '40%'}]}
                onPress = {() => {
                submitPlayer(player)
                setModalOpen(false)
                }}>
                    <Text style = {styles.text}>
                        ADD TO LIST
                    </Text>
                
            </TouchableOpacity>
            <TouchableOpacity   style = {[styles.input,{backgroundColor: '#a9e4f1', height: '20%'}]}
            onPress = {() => {
                setModalOpen(false)
                }}>
                <Text style = {styles.text}>CLOSE</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    
    container: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        height: Dimensions.get('screen').width * 0.7,
        width: Dimensions.get('screen').width * 0.7,
        backgroundColor: 'white',
        borderBottomColor: 'white',
        borderBottomWidth: 4
      
    },

    input: {
        
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
          
    },

    text: {
        fontSize: 30, 
        fontWeight: 'bold', 
        color: 'white',
        fontFamily: 'custom'
    }

   
})
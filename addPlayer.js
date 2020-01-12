import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function AddPlayer({ submitPlayer }) {

    const [player, setText] = useState('')

const change = (value) => {
    setText(value)
}

    return (
        <View>
            <TextInput
            style = {styles.input}
            placeholder = '   NEW PLAYER NAME...'
            onChangeText = {change}
            />
            <TouchableOpacity
            style = {[styles.input,
                {backgroundColor: '#22a6b3',
                alignItems: 'flex-start'}]}
                onPress = {() => {submitPlayer(player)}}>
            <Text
            style = {{
                fontSize: 30, 
                fontWeight: 'bold', 
                color: 'white', fontFamily: 'custom'}}>
                ADD TO LIST
            </Text>

            </TouchableOpacity>
           

            
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 75,
        width: Dimensions.get('screen').width * 0.9,
        paddingLeft: 20,
        backgroundColor: '#c7ecee'
    },

   
})